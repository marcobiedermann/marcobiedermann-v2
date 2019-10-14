import { navigate } from '@reach/router';
import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import Pagination, { PaginationProps } from '../../components/Pagination';

const keyMap = {
  NAVIGATE_PREVIOUS: 'left',
  NAVIGATE_NEXT: 'right',
};

const PaginationContainer: React.FC<PaginationProps> = props => {
  const handlers = {
    NAVIGATE_PREVIOUS: (): void => {
      const { previous } = props;

      return previous && navigate(previous.path);
    },
    NAVIGATE_NEXT: (): void => {
      const { next } = props;

      return next && navigate(next.path);
    },
  };

  return (
    <GlobalHotKeys handlers={handlers} keyMap={keyMap}>
      <Pagination {...props} />
    </GlobalHotKeys>
  );
};

export default PaginationContainer;
