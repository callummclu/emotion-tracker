import { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

class RowItem extends Component {
  render() {
    const { title, icon, colorBG: backgroundColor, style } = this.props;
    return (
      <View
        style={
          style
            ? { paddingTop: 5, alignItems: "center", ...style }
            : { paddingTop: 5, alignItems: "center" }
        }
      >
        <TouchableOpacity
          style={{
            backgroundColor,
            width: 350,
            height: 60,
            paddingTop: 10,
            borderRadius: 16,
            marginHorizontal: 1.5,
            borderColor: "black",
            borderWidth: 2,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginLeft: 5 }}>
              <Icon name={icon} size={40} color={"black"} />
            </View>
            <Text
              style={{
                width: 230,
                color: "black",
                fontSize: 25,
                textAlign: "center",
                marginLeft: 10,
              }}
            >
              {title}
            </Text>
            <View style={{ marginLeft: "auto", marginRight: 5 }}>
              <Icon name="arrow-right" size={40} color={"black"} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

RowItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  colorBG: PropTypes.string,
};

export default RowItem;
