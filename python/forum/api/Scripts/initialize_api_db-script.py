#!c:\users\ray\desktop\playground\python\forum\api\scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'api','console_scripts','initialize_api_db'
__requires__ = 'api'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('api', 'console_scripts', 'initialize_api_db')()
    )
