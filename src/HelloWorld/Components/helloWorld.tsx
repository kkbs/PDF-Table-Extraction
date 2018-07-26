import * as React from 'react';
import getJSONData from '../../data';
import { Paragraph, Sentence, Word, Table, Analytics } from '../state/fileState';
import { isNullOrUndefined } from 'util';
import '../Design/index.css';

export interface Props {
    getFileContent: (fileID: number) => void;
    content: Paragraph[];
}
export interface State {
    fileID: number;
}

export default class HelloWorld extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fileID: 0
        };
    }

    render() {
        var { content } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <input className="form-control" type="text" onChange={(e) => { this.setState({ fileID: parseInt(e.currentTarget.value, 10) }); }} /><br />
                        <button className="btn btn-primary btn-block" onClick={() => { this.props.getFileContent(this.state.fileID); }} >File</button>
                    </div>
                    <div className="col-md-3" />
                </div>
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6" style={{ marginTop: '40px' }}>
                        {content.map((paragraphs: Paragraph, i: number) =>
                            <React.Fragment key={i}>
                                <div >
                                    {paragraphs.Structure === 'Table' ? this.renderTable(paragraphs.Table) : this.renderSentences(paragraphs.Sentences)}
                                </div>
                            </React.Fragment>)}
                    </div>
                    <div className="col-md-3" />
                </div>
            </React.Fragment>
        );
    }
    renderSentences(sentence: Sentence[]) {
        if (!isNullOrUndefined(sentence)) {
            var a = (
                <div >{sentence.map((sentences: Sentence, j) =>
                    <React.Fragment key={j}>
                        <div>
                            {sentences.Words.map((words: Word, k) =>
                                <React.Fragment key={k}>
                                    <span data-toggle="tooltip" data-placement="top" title={this.getToolTip(words.Analytics)} style={{ backgroundColor: this.getAnalyticsColor(words.Analytics) }}>{words.Content + ' '}</span>
                                </React.Fragment>)}
                        </div>
                    </React.Fragment>)}</div>);
            return a;
        } else {
            return <div />;
        }

    }

    getAnalyticsColor(analytics: Analytics[]) {
        var colors: any = {
            '': '',
            Submission: '#c1e8f0D9',
            Outcome: '#EC271320',
            Argument: '#FEE8C8',
            Citation: '#ffffff',
            Section: '#yellow',
            Reasoning: '#ffffff',
            Holding: '#EC271320',
            Arguments: '#'
        };
        if (!isNullOrUndefined(analytics)) {
            return colors[analytics[0].Key];
        } else {
            return 'white';
        }

    }
    getToolTip(analytics: Analytics[]) {
        if (!isNullOrUndefined(analytics)) {
            if (analytics[0].Key !== '') {
                return analytics[0].Key;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }
    renderTable(table: Table[]) {
        if (!isNullOrUndefined(table)) {
            return (
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <hr />
                    <table className="table">
                        <tbody>
                            {table.map((rows, i) =>
                                <React.Fragment key={i}>
                                    <tr style={{ borderTop: i === 0 ? '1px solid black' : '0px' }}>
                                        {rows.Row.map((col, j) =>
                                            <React.Fragment key={j}>
                                                <td>{col.Content}</td>
                                            </React.Fragment>)}
                                    </tr>
                                </React.Fragment>)}
                        </tbody>
                    </table>
                    <hr />
                </div>);

        } else {
            return <div />;
        }
    }

    getIndentation(previndentation: number, currentIndentation: number) {
        var finalIndent: number = 0.0;

        if (previndentation < currentIndentation) {
            finalIndent = finalIndent + 37.5;
        } else if (previndentation > currentIndentation) {
            finalIndent = finalIndent - 37.5;
        }
        if (finalIndent < 0) {
            finalIndent = 0;
        } else if (finalIndent > 375) {
            finalIndent = 375;
        }

        return finalIndent + 'px';
    }

}