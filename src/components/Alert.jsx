const Alert = ({type,show,msg}) => {
  return (
<article>
  {show && (
    <h1 className="transition-opacity   text-lg font-semibold text-center text-blue-700 ">
      {msg}
    </h1>
  )}
</article>

  )
}
export default Alert