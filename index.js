<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Social Links</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #fbc02d, #ffeb3b);
            margin: 0;
        }

        .container {
            text-align: center;
        }

        h1 {
            color: #333;
            margin-bottom: 1rem;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }

        .card {
            width: 120px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            text-decoration: none;
        }

        .card:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .card img {
            width: 50%;
            height: 50%;
        }

        .card p {
            font-size: 0.9rem;
            color: #333;
            margin: 0;
            padding-top: 0.5rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Follow Me On</h1>
        <div class="cards">
            <!-- WhatsApp -->
            <a href="YOUR_WHATSAPP_LINK" class="card" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
                <p>WhatsApp</p>
            </a>

            <!-- YouTube -->
            <a href="YOUR_YOUTUBE_LINK" class="card" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube">
                <p>YouTube</p>
            </a>

            <!-- TikTok -->
            <a href="YOUR_TIKTOK_LINK" class="card" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg" alt="TikTok">
                <p>TikTok</p>
            </a>

            <!-- Instagram -->
            <a href="YOUR_INSTAGRAM_LINK" class="card" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
                <p>Instagram</p>
            </a>

            <!-- Telegram -->
            <a href="YOUR_TELEGRAM_LINK" class="card" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram">
                <p>Telegram</p>
            </a>

            <!-- Website -->
            <a href="YOUR_WEBSITE_LINK" class="card" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Globe_icon.svg" alt="Website">
                <p>Website</p>
            </a>

            <!-- Mobile App -->
            <a href="YOUR_MOBILE_APP_LINK" class="card" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Download_button.png" alt="App">
                <p>App</p>
            </a>
        </div>
    </div>
</body>
</html>
