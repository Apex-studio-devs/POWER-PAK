<?php
// send-order.php
// IMPORTANT:
// 1) Upload this file in the SAME folder where shop.html exists.
// 2) Change $to_email to the email where you want to receive orders.
// 3) For best delivery, use a domain email in $from_email, for example: orders@powerplus.pk
//    Do NOT use Gmail as From address on cPanel hosting.

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed.'
    ]);
    exit;
}

$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

if (!is_array($data)) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON request.'
    ]);
    exit;
}

function clean_text($value) {
    $value = is_string($value) ? trim($value) : '';
    $value = str_replace(["\r", "\n"], ' ', $value);
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function clean_body($value) {
    $value = is_string($value) ? trim($value) : '';
    return strip_tags($value);
}

$name         = clean_text($data['name'] ?? '');
$phone        = clean_text($data['phone'] ?? '');
$email        = clean_text($data['email'] ?? '');
$city         = clean_text($data['city'] ?? '');
$address      = clean_text($data['address'] ?? '');
$notes        = clean_text($data['notes'] ?? '');
$orderMessage = clean_body($data['orderMessage'] ?? '');

if ($name === '' || $phone === '' || $city === '' || $address === '' || $orderMessage === '') {
    echo json_encode([
        'success' => false,
        'message' => 'Required fields are missing.'
    ]);
    exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Customer email is not valid.'
    ]);
    exit;
}

// CHANGE THESE TWO EMAILS
$to_email   = 'powerplusbond@gmail.com';   // where you want to receive the order
$from_email = 'orders@powerplus.pk';       // must be a domain email from your hosting/cPanel
$from_name  = 'Power Pak Website';

$subject = 'New Power Pak Order - ' . $name;

$body  = $orderMessage . "\n\n";
$body .= "------------------------------\n";
$body .= "Sent From Website Checkout\n";
$body .= "Customer Name: {$name}\n";
$body .= "Customer Phone: {$phone}\n";
$body .= "Customer Email: " . ($email !== '' ? $email : 'Not provided') . "\n";
$body .= "City: {$city}\n";
$body .= "Address: {$address}\n";
$body .= "Notes: " . ($notes !== '' ? $notes : 'No notes') . "\n";

$headers  = "From: {$from_name} <{$from_email}>\r\n";
$headers .= "Reply-To: " . ($email !== '' ? $email : $from_email) . "\r\n";
$headers .= "Return-Path: {$from_email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Extra parameter improves delivery on many cPanel servers
$mail_sent = @mail($to_email, $subject, $body, $headers, "-f {$from_email}");

if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Order email sent successfully.'
    ]);
} else {
    error_log('Power Pak order email failed. Data: ' . $raw_input);
    echo json_encode([
        'success' => false,
        'message' => 'Email failed. Please check hosting mail settings or use SMTP.'
    ]);
}
?>
