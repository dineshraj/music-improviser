import React, {PropTypes} from 'react';

class Settings extends React.Component {

    render() {
        const {tempo, changeTempo, isOpen} = this.props;
        const hideClass = isOpen ? 'show' : 'hide';
        return (
            <div className={`tool settings ${hideClass}`}>
                <div>
                    <h2>Master settings</h2>
                    <label>Tempo: </label>
                    <input type="number" min="20" max="200" defaultValue={tempo} className="tempo" onChange={changeTempo} /><br />
                </div>
                <div>
                    <h2>Synth Settings</h2>
                    <label>Volume: </label>
                    <input type="range" min="0" max="80" defaultValue="20" className="slider" /><br />
                    <label>Attack Time (ms): </label>
                    <input type="number" min="0" max="3000" defaultValue="10" className="attackTime" /><br />
                    <label>Release Time (ms): </label>
                    <input type="number" min="0" max="3000" defaultValue="200" className="releaseTime" /><br />
                    <h3>Midi Input Device: </h3>
                    <table id="midi_source">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td className="name"></td>
                            </tr>
                            <tr>
                                <td>Manufacturer</td>
                                <td className="manufacturer"></td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td className="state"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="key_data"></div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {
    tempo: PropTypes.number.isRequired,
    changeTempo: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};

export default Settings;
