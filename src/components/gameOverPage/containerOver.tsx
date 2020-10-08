import { connect } from 'react-redux';
import { ACTION } from '../../store';
import  { GameOverPage }  from './gameOverPage';

const mapStateToProps = (state: number) => {
  return {
    round: state
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  restartGame: () => dispatch({ type: ACTION.RESET })
});

export const ContainerOver = connect(mapStateToProps, mapDispatchToProps)(GameOverPage);
