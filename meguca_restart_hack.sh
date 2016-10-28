#!/usr/bin/env bash
# if meguca has died, reboot it.
# call this with the command:  nohup ./meguca_restart_hack.sh &
# which will cause it to detach from the terminal, so the program doesn't end when exit the terminal.

megucadir=/var/www/meguca
serverfile=$megucadir/server/.server.pid
whinefile=/var/www/meguca/ITS_DEAD.log
i="0"

[[ -e $whinefile ]] && rm $whinefile

# we'll make checks once a minute
# we'll attempt to reboot it up to 3 times in a row before giving up
while [[ $i -lt 3 ]]; do
    sleep 1m

    # sometimes meguca doesn't generate the serverfile for some reason..
    # so we can't rely on it. Instead, we'll just have to look for the process.
    if ps aux | grep -v grep | grep "node index"; then
        # and if it isn't generated, then we might as well make it for the sake of npm stop/restart
        if [[ -e $serverfile ]]; then 
            ps aux | grep -v grep | grep "node index" | tr -s " " | cut -f2 -d ' ' > $serverfile
        fi
        # node must have survived for at least a minute, and if there's a redis problem or something
        # then it usually dies within ~20s. So it's safe to assume that node's healthy, and we can
        # restart the counter
        # we can also assume that meguca died from some stupid codebase error I don't care about
        i="0"
    else
        # process doesn't exist, so lets boot it up
        i=$[$i+1]
        mydir=$PWD
        cd $megucadir && npm start
        cd $mydir
    fi
done
# after three minutes of failure....

echo `date +"%D %T"` "--3 minutes of failed reboots" > $whinefile
# and now this process exits naturally.
