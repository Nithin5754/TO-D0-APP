const Alert = ({type,show,msg}) => {
  return (
<article>
  {show && (
    <h1 className="transition-opacity  animate-pulse text-lg font-semibold text-center text-blue-700 bg-blue-100 border border-blue-400 p-4 rounded-md shadow">
      {msg}
    </h1>
  )}
</article>

  )
}
export default Alert