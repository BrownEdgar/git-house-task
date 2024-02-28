import './EmailSection.scss'
function EmailSection() {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(e.target.email.value);

	}
  return (
	<section className='EmailSection'>
		<div className='EmailSection__holder'>
			<h2 className='EmailSection__title'>Upgrade your home today?</h2>
			<p className='EmailSection__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id risus vulputate tortor, risus ut Viverra viverra aliquam, semper duis a aliquam.</p>
			<form onSubmit={handleSubmit} className='EmailSection__form'>
			<div className='EmailSection__form-inputs'>
				<input type="text" name='email' placeholder='Enter your email...'/>
				<input type="submit"/>
			</div>
		</form>
		</div>
		
	</section>
  )
}

export default EmailSection