export function TypographyH1(props: {text: string; h: string; color: string}) {
    return (
      <h1 style={{
        fontSize: `${props.h}rem`,
        color: props.color,
      }} className={`scroll-m-20 text-center font-extrabold tracking-tight text-balance`}>
        {props.text}
      </h1>
    )
  }