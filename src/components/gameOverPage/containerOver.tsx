import { connect } from 'react-redux';
import  { GameOverPage }  from './gameOverPage';

const mapStateToProps = (state: number) => {
  return {
    round: state
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    restartGame: () => dispatch({ type: 'Reset' }),
  }
};
export const ContainerOver = connect(mapStateToProps, mapDispatchToProps)(GameOverPage);