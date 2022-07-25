import React from 'react';

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export type ClickEventType<T = Element> = React.MouseEvent<T>;
export type ChangeEventType<T = Element> = React.ChangeEvent<T>;
