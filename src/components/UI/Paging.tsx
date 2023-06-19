import React, {FC, memo, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {usePaging} from '../../hooks/usePaging';

interface PagingProps {
  totalPages: number;
  onChange: (page: number) => void;
  // currentPage: number,
  displayMode?: string;
}

const pageButtons: number[] = [];

const Paging: FC<PagingProps> = ({totalPages, onChange, displayMode}) => {
  const [pageButtons, setPageButtons] = useState<number[]>([]);
  const {setCurrentPage, currentPage} = usePaging();
  useEffect(() => {
      for (let i = 1; i < totalPages+1; i++){
          setPageButtons(
              (previousPageButtons)=>
              ([...previousPageButtons, i]
          ))
      }
  }, [])



  return (
    <View style={styles.pagingContainer}>
      {pageButtons.map(value => (
        <Button key={value} onPress={() => setCurrentPage(value)} mode={value===currentPage ? "contained" : "text"}>
          {value}
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pagingContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
});

export default memo(Paging);
