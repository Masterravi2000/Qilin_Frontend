import { View, TouchableOpacity, StyleSheet } from 'react-native'
TextScallingFalse
import React from 'react'
import TextScallingFalse from '../Texts/TextScallingFalse'
import TickMarkIcon from '../SvgIcons/GeneralIcons/TickMark'
import TickMarkWhiteIcon from '../SvgIcons/GeneralIcons/TickMarkWhite'

type Props = {
  filledCount: number;
  totalCount: number;
  allRequiredFilled: boolean;
};


const SellingFormHeaderBar: React.FC<Props> = ({
  filledCount,
  totalCount,
  allRequiredFilled,
}) => {
  return (
        <View style={styles.headerContainer}>
      <View style={styles.countContainer}>
        <TextScallingFalse style={styles.countText}>
          {filledCount}/{totalCount} fields
        </TextScallingFalse>
      </View>

      <TextScallingFalse style={styles.headerText}>Selling</TextScallingFalse>
      <View />

      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.tickMarkButton,
          { backgroundColor: allRequiredFilled ? "#FE386A" : "#afafafff" },
        ]}
      >
        <TickMarkWhiteIcon />
      </TouchableOpacity>
    </View>
  )
}

export default SellingFormHeaderBar

const styles = StyleSheet.create({
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
  headerText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500'
  },
  tickMarkButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})