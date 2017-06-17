import React from 'react';
import { Text } from 'react-native';

// export class MonoText extends React.Component {
//   render() {
//     return (
//       <Text
//         {...this.props}
//         style={[this.props.style, { fontFamily: 'space-mono' }]}
//       />
//     );
//   }
// }

// export class NevisText extends React.Component {
//   render() {
//     return (
//       <Text
//         {...this.props}
//         style={[this.props.style, { fontFamily: 'nevis' }]}
//       />
//     );
//   }
// }

export class ModernSansText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'modern-sans' }]}
      />
    );
  }
}
