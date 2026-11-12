Add-Type -AssemblyName System.Drawing

$srcFile = Join-Path $PSScriptRoot "..\public\pushpraj-photo.png"
$src = [System.Drawing.Image]::FromFile($srcFile)

$size = 128
$dest = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($dest)

$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$g.Clear([System.Drawing.Color]::Transparent)

# Circular clip
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$inset = 3
$innerSize = $size - (2 * $inset)
$path.AddEllipse($inset, $inset, $innerSize, $innerSize)
$g.SetClip($path)

# Square crop on the head/upper body
$minDim = [Math]::Min($src.Width, $src.Height)
$srcX = [int](($src.Width - $minDim) / 2)
$srcY = 0
$srcRect = New-Object System.Drawing.Rectangle $srcX, $srcY, $minDim, $minDim
$destRect = New-Object System.Drawing.Rectangle $inset, $inset, $innerSize, $innerSize

$g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Draw radiant amber border
$g.ResetClip()
$pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(245, 158, 11)), 3.5
$g.DrawEllipse($pen, $inset, $inset, $innerSize, $innerSize)

$outPng = Join-Path $PSScriptRoot "..\public\favicon.png"
$dest.Save($outPng, [System.Drawing.Imaging.ImageFormat]::Png)

# Convert to ICO
$iconHandle = $dest.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($iconHandle)
$outIco = Join-Path $PSScriptRoot "..\public\favicon.ico"
$stream = [System.IO.File]::OpenWrite($outIco)
$icon.Save($stream)
$stream.Close()
$icon.Dispose()

$dest.Dispose()
$src.Dispose()
$g.Dispose()
$pen.Dispose()
$path.Dispose()

Write-Host "Favicons generated successfully!"
