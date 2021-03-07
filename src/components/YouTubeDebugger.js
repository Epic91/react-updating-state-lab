// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitrateChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
        }})
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrateChange}> Change bitrate </button>
                <p>
                <button className='resolutio' onClick={this.handleResolutionChange}> Change Resolution </button>
                </p>
            </div>
        )
    }
}

export default YouTubeDebugger;