# HolySheetscode

'Declaremouse events
Public Declare Function SetCursorPos Lib "user32" (ByVal x As Long, ByVal y As Long) As Long
Public Declare Sub mouse_event Lib "user32" (ByVal dwFlags As Long, ByVal dx As Long, ByVal dy As Long, ByVal cButtons As Long, ByVal dwExtraInfo As Long)
Public Const MOUSEEVENTF_LEFTDOWN = &H2
Public Const MOUSEEVENTF_LEFTUP = &H4
Public Const MOUSEEVENTF_RIGHTDOWN As Long = &H8
Public Const MOUSEEVENTF_RIGHTUP As Long = &H10
'Declare sleep
Declare Sub Sleep Lib "kernel32" (ByVal dwMilliseconds As Long)

Sub CityscapeSkyline()
'Open MS Paint and select Natural pencil Brush with 6px width
For k = 1 To 3
  SetCursorPos 16, 500
  Sleep 50
  mouse_event MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0
  For i = 16 To 600 Step 5
    For j = 500 To 300 Step -Int((180 - 10 + 1) * Rnd + 10)
      SetCursorPos i, j
      Sleep 10
    Next j
  Next i
  mouse_event MOUSEEVENTF_LEFTUP, 0, 0, 0, 0
Next k
End Sub

#Open program

System.Diagnostics.Process.Start("http://forums.microsoft.com/msdn/")
