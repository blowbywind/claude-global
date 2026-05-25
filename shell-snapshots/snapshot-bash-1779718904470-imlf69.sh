# Snapshot file
# Unset all aliases to avoid conflicts with functions
unalias -a 2>/dev/null || true
shopt -s expand_aliases
# Check for rg availability
if ! (unalias rg 2>/dev/null; command -v rg) >/dev/null 2>&1; then
  function rg {
  local _cc_bin="${CLAUDE_CODE_EXECPATH:-}"
  [[ -x $_cc_bin ]] || _cc_bin=/c/Users/DG/.local/bin/claude.exe
  if [[ ! -x $_cc_bin ]]; then command rg "$@"; return; fi
  if [[ -n $ZSH_VERSION ]]; then
    ARGV0=rg "$_cc_bin" "$@"
  elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
    ARGV0=rg "$_cc_bin" "$@"
  elif [[ $BASHPID != $$ ]]; then
    exec -a rg "$_cc_bin" "$@"
  else
    (exec -a rg "$_cc_bin" "$@")
  fi
}
fi
export PATH='/c/Users/DG/bin:/mingw64/bin:/usr/local/bin:/usr/bin:/bin:/mingw64/bin:/usr/bin:/c/Users/DG/bin:/c/Windows/system32:/c/Windows:/c/Windows/System32/Wbem:/c/Windows/System32/WindowsPowerShell/v1.0:/c/Windows/System32/OpenSSH:/c/Program Files/dotnet:/c/Program Files (x86)/PuTTY:/cmd:/c/Program Files/nodejs:/c/Users/DG/AppData/Local/Microsoft/WindowsApps:/c/Users/DG/.dotnet/tools:/c/Users/DG/AppData/Local/Programs/Microsoft VS Code/bin:/c/Users/DG/AppData/Roaming/npm:/c/Users/DG/AppData/Local/Programs/Antigravity/bin:/usr/bin/vendor_perl:/usr/bin/core_perl'
