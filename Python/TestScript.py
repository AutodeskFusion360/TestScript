#Author-Autodesk Inc.
#Description-Simple script display a message.

import adsk.core, traceback

def main():
    ui = None
    try:
        app = adsk.core.Application.get()
        ui  = app.userInterface
        ui.messageBox('Hello script')

    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))

main()
