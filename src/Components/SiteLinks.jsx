export default function SiteLinks({direction, links}) {
  // Ternary Operator
  // (expression ? trueResult : falseResult)
  // direction = "column" / "row"
  return (
    <nav style={{display: "flex", flexDirection: direction, justifyContent: "space-around", width: "100%"}}>
      {links.map(link => <Link href={link.href} label={link.label}/>)}
    </nav>
  )
}

export function Link(props) {
  return <a style={{textDecoration: "none"}} href={props.href}>{props.label}</a>
}