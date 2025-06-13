🔥 Overview
Vexora Advanced Minigame is a high-quality, customizable minigame system designed for immersive interactions in your FiveM server. Perfect for robbery systems, hacking terminals, or custom tasks, this module offers a smooth UI and responsive controls for engaging gameplay moments.

🎮 Features
🎨 Beautiful animated center popup UI

⏱️ Countdown timer integrated

🧠 Configurable difficulty and behavior

🖱️ Mouse + Keyboard-based mechanics

🔊 Sound effects for hover, success, and failure

🔁 Easy-to-integrate export system

🧩 Optimized for FiveM performance

🧰 Requirements
ox_lib

qb-core (or your preferred core, QBCore-compatible)

FiveM Artifact version 4752+ (recommended)


🛠️ Installation
Download or Extract
Place the VexoraAdvancedMinigame folder inside your resources/[scripts] folder.

Ensure in server.cfg

ruby
Copy
Edit
ensure VexoraAdvancedMinigame
Using the Export
Call the minigame from any script like this:

lua
Copy
Edit
exports['VexoraAdvancedMinigame']:StartMinigame({
    type = "wirecut", -- Type of minigame
    time = 15,        -- Seconds to complete
    difficulty = "medium", -- easy / medium / hard
}, function(success)
    if success then
        print("Player succeeded!")
        -- Continue your logic
    else
        print("Player failed!")
        -- Handle fail condition
    end
end)
Customize in config.lua
Modify visual style, duration, difficulty scaling, sound, and animations.

🔧 Configuration (config.lua)
lua
Copy
Edit
Config = {
    DefaultTime = 15,
    SoundEffects = true,
    Anim = {
        enabled = true,
        dict = "mini@repair",  -- Change to mechanic/hacking animation
        name = "fixing_a_ped"
    },
    Difficulties = {
        easy = 3,
        medium = 5,
        hard = 7
    }
}
🧪 Test Command
Run this in-game to test:

bash
Copy
Edit
/minigametest
🛡️ License
This resource is protected and licensed for use under your Tebex/Gumroad purchase terms. Redistribution is prohibited.

📬 Support
For support, updates, and integration help, join our Discord:

🔗 [discord.gg/vexora](https://discord.gg/P9yjM47vbU)
