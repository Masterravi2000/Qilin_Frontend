import { StyleSheet, Image, TouchableOpacity, NativeSyntheticEvent, NativeScrollEvent, KeyboardTypeOptions, FlatList, View, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from 'expo-router';
import PageThemeView from '../../../../components/PageThemeView'
import TextScallingFalse from '../../../../components/Texts/TextScallingFalse'
import ImageUploadIcon from '../../../../components/SvgIcons/Uploads/ImageUploadIcon'
import FormInputSection from '../../../../components/InputSections/FormInputSection'
import SmallInputSection from '../../../../components/InputSections/SmallInputSection';
import SellingFormHeaderBar from '../../../../components/RequiredHeaderBar/SellingFormHeaderBar';
import AddMoreImageIcon from '../../../../components/SvgIcons/Uploads/AddMoreImages';
import CrossIcon from '../../../../components/SvgIcons/GeneralIcons/CrossIcon';
import { useDispatch } from 'react-redux'
import { setFormData } from '../../../../reduxStore/slices/productFormSlice';
import { useGetOptionalQuestionsQuery } from '../../../../reduxStore/api/SellingFormQuestions/optionalQuestions';
import { useGetWrittenQuestionsQuery } from '../../../../reduxStore/api/SellingFormQuestions/writtenQuestions';

const index = () => {
  const router = useRouter();
  // Fetch from backend via Redux/RTK Query
  const { data: optionalQuestions = [], isLoading, error } = useGetOptionalQuestionsQuery();
  const { data: writtenQuestions = [], isLoading: writtenLoading, error: writtenError } = useGetWrittenQuestionsQuery();

  // useStates  
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [originalPrice, setOriginalPrice] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [writtenValues, setWrittenValues] = useState<Record<string, string>>({});
  const [selectedField, setSelectedField] = useState(""); // e.g., "Category", "Material"
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  //useRefs
  const flatListRef = useRef<FlatList<any>>(null);

  // Build options map for easy lookup
  const optionsData = optionalQuestions.reduce((acc, q) => {
    acc[q.name] = q.options || [];
    return acc;
  }, {} as Record<string, string[]>);

  // Normalize into array of strings for mapping
  const questionFields = optionalQuestions.map(q => q.name);
  //Normalize Written questions
  const writtenData: {
    name: string;
    required: boolean;
    keyboardType?: KeyboardTypeOptions;
  }[] = writtenQuestions.map(q => ({
    ...q,
    keyboardType: ["default", "numeric", "email-address", "phone-pad", "number-pad", "decimal-pad"].includes(q.keyboardType || "")
      ? (q.keyboardType as KeyboardTypeOptions)
      : "default",
  }));

  // Show loading or error states
  if (isLoading) {
    return <TextScallingFalse style={styles.WarningText}>Loading optional questions…</TextScallingFalse>;
  }
  if (error) {
    return <TextScallingFalse style={styles.WarningText}>Failed to load questions</TextScallingFalse>;
  }


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImages(prev => {
        const updated = [...prev, result.assets[0].uri];

        // scroll to the newly added image
        requestAnimationFrame(() => {
          flatListRef.current?.scrollToIndex({
            index: updated.length - 1,
            animated: true,
          });
        });

        return updated;
      });
    }
  };

  // for removing the image
  const removeImage = (index: number) => {
    setImages(prev => {
      const updated = prev.filter((_, i) => i !== index);

      // pick target index to scroll to
      let targetIndex = index;
      if (targetIndex >= updated.length) {
        targetIndex = updated.length - 1; // scroll to previous if last was removed
      }

      if (updated.length > 0) {
        requestAnimationFrame(() => {
          flatListRef.current?.scrollToIndex({
            index: targetIndex,
            animated: true,
          });
        });
      }

      return updated;
    });
  };


  //Image Scroll Indicating function
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    setCurrentImageIndex(index);
  };


  // helper
  const isFilled = (v: unknown) =>
    v !== undefined && v !== null && String(v).trim() !== "";

  // Count written fields (handles required & optional uniformly)
  const filledWrittenCount = writtenData.reduce((acc, f) => {
    return acc + (isFilled(writtenValues[f.name]) ? 1 : 0);
  }, 0);

  // Count optional fields (selectedValues)
  const filledOptionalCount = questionFields.reduce((acc, name) => {
    return acc + (isFilled(selectedValues[name]) ? 1 : 0);
  }, 0);

  // Other single-value fields
  const filledOtherCount =
    (isFilled(originalPrice) ? 1 : 0) +
    (isFilled(price) ? 1 : 0) +
    (isFilled(productName) ? 1 : 0) +
    (isFilled(description) ? 1 : 0);

  // Image field counts as ONE field (adjust if you want each image to count)
  const imageFieldCount = images.length > 0 ? 1 : 0;

  // Total filled
  const filledCount =
    filledWrittenCount + filledOptionalCount + filledOtherCount + imageFieldCount;

  // Total fields (include 1 for image)
  const totalCount =
    writtenData.length + questionFields.length + 4 + 1; // +1 = Images field

  // --- Required checks ---
  // required written field names
  const requiredWrittenNames = writtenData.filter(f => f.required).map(f => f.name);

  // check required written inputs
  const requiredWrittenFilled = requiredWrittenNames.every(name =>
    isFilled(writtenValues[name])
  );

  // check main required other fields
  const otherRequiredFilled =
    isFilled(originalPrice) &&
    isFilled(price) &&
    isFilled(productName) &&
    isFilled(description) &&
    questionFields.every(f => isFilled(selectedValues[f])) &&
    images.length > 0;

  // require at least one image
  const imageRequiredFilled = images.length > 0;

  // final required flag
  const allRequiredFilled =
    requiredWrittenFilled && otherRequiredFilled && imageRequiredFilled;


  const dispatch = useDispatch();
  const handlePreview = () => {
    dispatch(setFormData({
      images,
      productName,
      price,
      originalPrice,
      description,
      writtenValues,
      selectedValues,
    }));

    router.push('/preview'); // navigate to preview page
  };

  return (
    <PageThemeView>
      {/* Header */}
      <SellingFormHeaderBar
        filledCount={filledCount}
        totalCount={totalCount}
        allRequiredFilled={allRequiredFilled}
        onPreview={handlePreview}
      />
      {/* Form Body */}
      <ScrollView contentContainerStyle={styles.ScrollView} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        {/* Image Upload Section */}
        <View style={styles.ImageSection}>
          {images.length > 0 ? (
            <View style={styles.imageSectionContainer}>
              {/* addmore or remove section */}
              <View style={styles.addAndRemoveContainer}>
                <View style={styles.addAndRemoveCompo}>
                  <TouchableOpacity onPress={pickImage} activeOpacity={0.6} style={styles.AddMoreButton}>
                    <AddMoreImageIcon />
                    <TextScallingFalse style={styles.AddMoreText}>Add More</TextScallingFalse>
                  </TouchableOpacity>
                </View>
              </View>
              {/* FlatList to scroll multiple images horizontally */}
              <FlatList
                ref={flatListRef}
                data={images}
                horizontal
                onScroll={onScroll}
                scrollEventThrottle={16}
                pagingEnabled={true} // swipe full-width like gallery
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                getItemLayout={(_, index) => ({
                  length: 384,       // width of each item
                  offset: 384 * index,
                  index,
                })}
                renderItem={({ item, index }) => (
                  <View style={styles.ImageRender}>
                    <Image
                      source={{ uri: item }}
                      style={styles.Image}
                      resizeMode="cover"
                    />
                    {/* Cross button on each image */}
                    <TouchableOpacity
                      onPress={() => removeImage(index)}
                      style={styles.CloseButton}>
                      <CrossIcon />
                    </TouchableOpacity>
                  </View>
                )}
              />
              {/* Scroll Indicator */}
              <View style={styles.scrollIndicator}>
                <View style={styles.IndicatorDotContainer}>
                  {images.map((_, index) => (
                    <View
                      key={index}
                      style={{
                        width: currentImageIndex === index ? 10 : 6,
                        height: 6,
                        borderRadius: currentImageIndex === index ? 4 : 10,
                        marginHorizontal: 2,
                        backgroundColor: currentImageIndex === index ? 'white' : '#bebebeff',
                      }}
                    />
                  ))}
                </View>
              </View>
            </View>
          ) :
            (
              <TouchableOpacity onPress={pickImage} activeOpacity={0.7} style={styles.ImageUploadButton}>
                <ImageUploadIcon />
                <TextScallingFalse style={styles.ImageUploadText}>Click Here to</TextScallingFalse>
                <TextScallingFalse style={styles.ImageUploadText}>Upload item image</TextScallingFalse>
              </TouchableOpacity>
            )
          }
        </View>

        {/* Form section */}
        <View style={styles.FormSectionContainer}>
          <FormInputSection label="Original Price" keyboardType="numeric" placeholderTextColor={'grey'} value={originalPrice} onChangeText={setOriginalPrice} />
          <FormInputSection label="Set Price" keyboardType="numeric" placeholderTextColor={'grey'} value={price} onChangeText={setPrice} />
          <FormInputSection label="Product Name" placeholderTextColor={'grey'} value={productName} onChangeText={setProductName} />
          <FormInputSection multiline={true} customStyle={{ height: 100 }} numberOfLines={4} label="Short Description" placeholderTextColor={'grey'} value={description} onChangeText={setDescription} />
        </View>

        {/* Details filling section */}
        <View style={styles.DetailsPartContainer}>
          <View style={styles.InnerContainer}>
            {/* Written Part */}
            <View style={styles.WriitenPart}>
              {writtenData.map((field) => (
                <SmallInputSection
                  key={field.name}
                  label={field.required ? `${field.name}*` : field.name}
                  placeholder=""
                  keyboardType={field.keyboardType}
                  value={writtenValues[field.name] || ""}
                  onChangeText={(text) =>
                    setWrittenValues((prev) => ({ ...prev, [field.name]: text }))
                  }
                />
              ))}
            </View>
            {/* Optional Part */}
            <View style={styles.OptionPart}>
              {questionFields.map((field) => (
                <SmallInputSection
                  key={field}
                  label={`${field}*`}
                  onChangeText={() => { }}
                  value={selectedValues[field] || ""}
                  placeholder={'Select option'}
                  selectMode
                  onPress={() => {
                    setSelectedField(field); // remember which field triggered modal
                    setShowOptions(true); // show modal
                  }}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Modal */}
        <Modal
          transparent
          visible={showOptions}
          onRequestClose={() => setShowOptions(false)}
        >
          <TouchableWithoutFeedback onPress={() => setShowOptions(false)}>
            <View style={styles.modalOverlay}>
              <ScrollView showsVerticalScrollIndicator={true} style={styles.modalBox}>
                {selectedField && optionsData[selectedField]?.map((item: string, index: number) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => {
                      setSelectedValues(prev => ({ ...prev, [selectedField]: item }));   // save selected value
                      setShowOptions(false);    // close modal
                    }}
                  >
                    <TextScallingFalse style={styles.OptionsText}>
                      {item}
                    </TextScallingFalse>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

      </ScrollView>
    </PageThemeView>
  )
}

export default index

const styles = StyleSheet.create({
  imageSectionContainer: {
    width: '100%',
    height: '100%'
  },
  addAndRemoveContainer: {
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0,
    zIndex: 10
  },
  addAndRemoveCompo: {
    paddingHorizontal: 6,
    gap: 8,
    flexDirection: 'row',
    paddingVertical: 9
  },
  AddMoreButton: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    backgroundColor: "rgba(128,128,128,0.6)",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    borderRadius: 100,
    flexDirection: 'row'
  },
  AddMoreText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600'
  },
  ImageRender: {
    width: 384,
    height: 494
  },
  Image: {
    width: '100%',
    height: '100%'
  },
  CloseButton: {
    position: 'absolute',
    top: 20,
    right: 15,
    backgroundColor: "rgba(128,128,128,0.6)",
    borderRadius: 50,
    padding: 8,
    zIndex: 100
  },
  scrollIndicator: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  IndicatorDotContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: '50%',
  },
  modalBox: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: 250,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  OptionsText: {
    fontSize: 16,
    color: "black"
  },
  headerContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    zIndex: 50,
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    borderBottomColor: '#909090',
    borderBottomWidth: 0.5
  },
  countContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#acacacff'
  },
  countText: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '500'
  },
  HeaderText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500'
  },
  TickMarkButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollView: {
    flexGrow: 1,
    paddingBottom: 10
  },
  ImageSection: {
    height: 494,
    width: '100%',
    backgroundColor: '#a5a5a5ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
  },
  ImageUploadButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImageUploadText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22
  },
  FormSectionContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    gap: 6
  },
  DetailsPartContainer: {
    width: '100%',
    padding: 20
  },
  InnerContainer: {
    borderWidth: 1,
    gap: 10,
    borderColor: 'black',
    borderRadius: 10,
    width: '100%',
    padding: 20
  },
  WriitenPart: {
    gap: 6
  },
  OptionPart: {
    gap: 8
  },
  WarningText: {
    color: 'black',
    fontSize: 10
  }
})