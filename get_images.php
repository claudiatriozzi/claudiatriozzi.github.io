<?php
// Utilisation du chemin relatif pour accéder au dossier 'slideshow'
$directory = __DIR__ . '/slideshow/';  // __DIR__ obtient le chemin absolu du dossier actuel

// Vérification que le dossier existe et est bien un répertoire
if (!is_dir($directory)) {
    echo json_encode(['error' => 'Le dossier slideshow n\'existe pas.']);
    exit;
}

// Récupération des fichiers images dans le dossier 'slideshow'
$images = array_values(array_filter(scandir($directory), function($file) use ($directory) {
    return preg_match('/\\.(jpg|jpeg|png|gif)$/i', $file);
}));

// Vérification si des images sont trouvées
if (empty($images)) {
    echo json_encode(['error' => 'Aucune image trouvée dans le dossier slideshow.']);
    exit;
}

// Retourner la liste des images sous forme de JSON
header('Content-Type: application/json');
echo json_encode($images);
?>
