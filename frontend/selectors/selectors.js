
export const handleEventListener = () =>  {
    const body = document.getElementsByClassName('body')[0]
    if (window.scrollY > 10) {
        this.setState({color: 'white'})
    }
    else {
        this.setState({ color: 'black'})
    }
}