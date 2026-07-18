<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Veuillez remplir tous les champs correctement.";
        exit;
    }

    $recipient = "contact@aesthetic-production.fr";
    $subject = "Nouveau message de contact - Aesthetic Production";

    $email_content = "Nom : $name\n";
    $email_content .= "Email : $email\n\n";
    $email_content .= "Message :\n$message\n";

    // Infomaniak requires the From header to match the domain to prevent spam block
    $email_headers = "From: contact@aesthetic-production.fr\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Merci ! Votre message a été envoyé avec succès.";
    } else {
        http_response_code(500);
        echo "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.";
    }
} else {
    http_response_code(403);
    echo "Une erreur est survenue. Soumission non autorisée.";
}
?>
