import { connect } from 'react-redux';
import HelloWorld from '../../HelloWorld/Components/helloWorld';
import FileActions from '../Actions/fileActions';
import FileStore from '../state/fileState';
export function mapStateToProps(appState: any) {
  var FileStoreData = appState.File as FileStore;
  return {
    content: FileStoreData.content
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    getFileContent: (fileID: number) => dispatch(FileActions.getContent(fileID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld as any);
