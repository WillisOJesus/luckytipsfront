class PercentTable extends React.Component{
    render(){
        return(
            <div className="input side">
            <span>Percentuais atuais</span>
            <div className="input-wrapper select">
                <div className="red">
                    <div>{this.props.red}</div>
                </div>
                <div className="white">
                    <div>{this.props.white}</div>
                </div>
                <div className="black">
                    <div>{this.props.black}</div>
                </div>
            </div>
        </div>
        )
    }
}