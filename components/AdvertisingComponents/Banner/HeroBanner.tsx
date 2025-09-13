import { StyleSheet, Image, View, FlatList, Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';

const { width } = Dimensions.get('window');
interface Props {

}

const HeroBanner: React.FC<Props> = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const banners = [
  { id: '1', image: 'https://plus.unsplash.com/premium_photo-1699973055471-634c3fc40347?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', image: 'https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];


  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      />
      {/* Optional: dots indicator */}
      <View style={styles.indicatorContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: currentIndex === index ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default HeroBanner;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 192,
    marginVertical: 15,
  },
  image: {
    width: width,
    height: '100%',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
});
