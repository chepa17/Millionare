import { connect } from 'react-redux';
import { ACTION } from '../../store';
import  { GamePage }  from './gamePage';

const mapDispatchToProps = (dispatch: any) => ({
    onNextRound: () => dispatch({ type: ACTION.ADD }),
    restartGame: () => dispatch({ type: ACTION.RESET })
});

const mapStateToProps = (state: number) => {
    return {
      round: state
    };
  };

export const ContainerGame = connect(mapStateToProps, mapDispatchToProps)(GamePage);
