import { Component } from "react";

import { FlexBox, Text, Divider } from "../../UI";

class Title extends Component {
  render() {
    return (
      <FlexBox column gap={10} align="center" pt={80} pb={40}>
        <Text size={30} color="black">
          {this.props.children}
        </Text>
        <FlexBox align="center" column gap={3}>
          <Divider color="brown-500" width={100} height={2} />
          <Divider color="brown-500" width={80} height={2} />
        </FlexBox>
      </FlexBox>
    );
  }
}

export default Title;
