import React, { useState } from 'react';
import { ButtonTypeEnum, ButtonType } from '@/@types/enum';

function useToggleButton<T>(type: ButtonType) {
  const [selectedList, setSelectedList] = useState<T[]>([]);

  const onToggleButton = (selectedData: T) => {
    const selectedIndex = selectedList.indexOf(selectedData);
    if (selectedIndex >= 0) {
      setSelectedList((prev) => {
        return prev.filter((_, index) => selectedIndex !== index);
      });

      return;
    }
    type === ButtonTypeEnum.SINGLE
      ? setSelectedList([selectedData])
      : setSelectedList((prev) => [...prev, selectedData]);
  };

  return {
    selectedList,
    onToggleButton,
  };
}
export default useToggleButton;
