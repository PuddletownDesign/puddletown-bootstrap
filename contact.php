<?php 
$title = 'Contact | '; 
$description = '';

if (isset($_POST['message'])) {
	include 'includes/contact/form-validate.php';
	
	if (!$error) {
		include 'includes/contact/send-mail.php';
	}
}
?>
<?php include 'includes/header.php'; ?>

	<main>
		<h1>Contact</h1>
		
<?php if (isset($sent)): ?>
		<p><strong>Thanks for getting in touch! <br> We&#8217;ll try to get back to you shortly&hellip;</strong></p>

<?php else: ?>
		<p><strong>Fields Marked with <img src="css/graphics/required.png" alt="Required"> are required.</strong></p>
        
		<form action="contact" method="post">
				<label for="name">Name</label> <img src="css/graphics/required.png" alt="Required"><br>
				<?php if (isset($nameError)): ?>
				<span class="error"><?php echo $nameError; ?></span><br>
				<?php endif; ?>
				<input type="text" name="name" id="name"<?php if (isset($error)){ echo " value=\"$name\""; } ?>>
				<br><br>
        
				<label for="email">Email</label> <img src="css/graphics/required.png" alt="Required"><br>
				<?php if (isset($emailError)): ?>
				<span class="error"><?php echo $emailError; ?></span><br>
				<?php endif; ?>
				<input type="text" name="email" id="email"<?php if (isset($error)){ echo " value=\"$email\""; } ?>>
				<br><br>
        
        
				<label for="message">Message</label> <img src="css/graphics/required.png" alt="Required"><br>
				<?php if (isset($messageError)): ?>
				<span class="error"><?php echo $messageError; ?></span><br>
				<?php endif; ?>
				<textarea name="message" id="message" rows="8" cols="40"><?php if (isset($error)){ echo $message; } ?></textarea>
				<br><br>
        
				<button>Send</button>
        </form>
<?php endif; ?>	

	</main>

<?php include 'includes/footer.php'; ?>