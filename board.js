import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  const boardSize = 8;
  const cellSize = 50;
  const board = [];

  for (let row = 0; row < boardSize; row++) {
    const cells = [];
    for (let col = 0; col < boardSize; col++) {
      const cellStyle = [
        styles.cell,
        (row + col) % 2 === 0 ? styles.white : styles.black
      ];
      cells.push(<View key={`${row}-${col}`} style={cellStyle} />);
    }
    board.push(<View key={row} style={styles.row}>{cells}</View>);
  }

  return <View style={styles.container}>{board}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  cell: {
    width: cellSize,
    height: cellSize
  },
  white: {
    backgroundColor: '#fff'
  },
  black: {
    backgroundColor: '#000'
  }
});

export default ChessBoard;