import { connect } from 'react-redux'
import Game from '../components/Game'

const mapStateToProps = state => ({
  layout: state.layout,
  moveStepsNum: state.moveStepsNum,
})

const mapDispatchToProps = dispatch => ({})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)