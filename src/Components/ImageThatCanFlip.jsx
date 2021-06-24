export default function ImageThatCanFlip(props) {
  const rotateImage = event => {
    if (event.target.style.transform == "rotate(180deg)") {
      event.target.style.transform = "rotate(0deg)"
    } else {
      event.target.style.transform = "rotate(180deg)"
    }
  }
  return (
    <img 
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F30%2F97%2Fflat-business-man-user-profile-avatar-icon-vector-4333097.jpg&f=1&nofb=1"
    height={props.height} width={props.width}
    onClick={rotateImage}/>
  )
}