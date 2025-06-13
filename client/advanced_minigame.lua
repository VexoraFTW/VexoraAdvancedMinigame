local _vexora_advanced_cb = nil

RegisterNUICallback('vexora-advanced:result', function(data, cb)
    SetNuiFocus(false, false)
    SendNUIMessage({ action = 'hide' })
    if _vexora_advanced_cb then
        _vexora_advanced_cb(data.success)
        _vexora_advanced_cb = nil
    end
    cb('ok')
end)

RegisterNetEvent('vexora:advancedminigame')
AddEventHandler('vexora:advancedminigame', function(callback)
    print("[VEXORA] Advanced minigame triggered")
    local Config = exports['vd-vendrobbery']:GetVexoraConfig()
    local settings = Config.AdvancedMinigame

    _vexora_advanced_cb = callback
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'show',
        config = {
            inputMode = settings.InputMode,
            difficulty = settings.Difficulty,
            sound = settings.Sounds
        }
    })
end)
