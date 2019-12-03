import * as React from 'react';
import { Consumer } from './context';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { ActionSheetProps } from './types';

export default function connectActionSheet<OwnProps = any>(
  WrappedComponent: React.ComponentType<OwnProps & ActionSheetProps>
) {
  const ConnectedActionSheet = React.forwardRef((props: OwnProps, ref) => {
    return (
      <Consumer>
        {({ showActionSheetWithOptions }) => {
          return (
            <WrappedComponent
              ref={ref}
              {...props}
              showActionSheetWithOptions={showActionSheetWithOptions}
            />
          );
        }}
      </Consumer>
    );
  });

  return hoistNonReactStatic(ConnectedActionSheet, WrappedComponent);
}
