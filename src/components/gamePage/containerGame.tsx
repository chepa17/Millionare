import { connect } from 'react-redux';
import  { GamePage }  from './gamePage';

const mapDispatchToProps = (dispatch: any) => {
  return {
    onNextRound: () => dispatch({ type: 'Add' }),
  }
};

const mapStateToProps = (state: number) => {
    return {
      round: state
    };
  };

export const ContainerGame = connect(mapStateToProps, mapDispatchToProps)(GamePage);