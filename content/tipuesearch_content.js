var tipuesearch = {"pages": [{'title': 'About', 'text': '動態網站:  https://b.scrum1.repl.co  主要用來維護網站內容 \n 靜態網站:  https://scrum-1.github.io/b  主要用來展示網站內容 \n 對應倉儲:  https://github.com/scrum-1/b  主要用來儲存網站資料 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Process', 'text': '經由  https://b.scrum1.repl.co  維護動態網站內容, 之後利用 generate_page 轉為靜態網站 (即分頁後將各頁面檔案存至 content 目錄) \n 在 Replit Git tool 進行提交後, 回到 Replit shell 執行 git push github', 'tags': '', 'url': 'Process.html'}, {'title': 'Replit', 'text': 'https://replit.com/  (use wcms) \n Replit 是一個能夠執行 Python 讓 cmsimde 網站的動態系統得以啟動, 並與 Github 中的倉儲保持同步的雲端服務. \n 要讓 cmsimde 網站在 Replit 中執行, 必須設定 main.py: \n from cmsimde import flaskapp\nfrom gevent.pywsgi import WSGIServer\n\n#flaskapp.app.run(host="0.0.0.0", debug=True)\nhttp_server = WSGIServer((\'0.0.0.0\', 8080), flaskapp.app)\nhttp_server.serve_forever() \n 利用 scrum1 At mde Gmail 登入 Replit, 建立名稱為 c 的 Repls, 則所建立的動態網站將位於:  https://c.scrum1.repl.co \n \n 以下為實際在 Replit 建立動態網站的流程: \n 登入 Replit (可以使用 Gmail 帳號) \n 建立新的 Repls 時選擇採用 Python template 作為 Language, Repls title 選擇用 "b" \n 為了要讓 Replit scrum1 帳號下的 b Repls 與 Github scrum-1 帳號下的 b 倉儲內容同步, 因此同時建立空倉儲 b \n 接著在 b Repls 中進入 shell, 執行 git init, 起始 git 倉儲的架構, 但因內建選用 master 作為分支名稱, 因此接著執行 git branch -m main \n 接著建立 .gitignore 內容如下: \n # Byte-compiled\n__pycache__/\n# for Replit, do not use the embedded venv Python\nvenv/\nconfig/config\n.DS_Store\n*.lock\n*.nix \n 接著將 cmsimde 設為倉儲子模組: \n git submodule add  https://github.com/mdecycu/cmsimde.git  cmsimde \n 待 cmsimde 子模組取下倉儲檔案後, 將 up_dir 中的所有檔案複製到 b 倉儲的根目錄 \n cp -R ./cmsimde/up_dir/* ./ \n 表示利用 cp 指令, -R 表示要連目錄中的所有檔案與目錄一併複製 \n 接著從 Replit 的 Tools 帶出 Git 工具準備提交 (請注意 Replit 並不支援 git add .) \n 接著將遠端的倉儲設為 remote, 名稱為 github \n git remote add github  https://github.com/scrum-1/b.git \n 接著將 scrum-1 具帶 repo 管理權限的 token 放入代號為 "github" 的 url 中, 然後執行 git push github \n 接著利用 Replit 中的 shell 安裝啟動 cmsimde 動態網站所需的模組: \n pip install flask flask_cors bs4 lxml pelican markdown gevent \n 接著執行 main.py 啟用動態網站,  https://b.scrum1.repl.co  就可以登入修改管理者密碼並著手維護倉儲內容. \n 由於 Replit 並不支援 git config --global user.name 與 user.email, 而必須在 .replite 中加入 GIT_AUTHOR_NAME, GIT_AUTHOR_EMAIL, GIT_COMMITTER_NAME, GIT_COMMITTER_EMAIL 等環境變數, 才能在提交時採用 Github 上所登記的帳號名稱. \n 最後在  https://github.com/scrum-1/b.git  端設定 Github Pages, 並在 Replit 端改版後, 以 Git 工具將改版內容提交至 .git 目錄, 並且用 git push github 執行推送. \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Notice', 'text': '在 Replit 中編輯檔案無需 save, 只要完成 key 資料即時儲存 \n Replit 中的 git init 仍然使用 master 作為主分支名稱, 可以利用 git branch -m main 將 master 修改為 main \n Replit 給定的免費資料很少, 若其中的動態網站無法啟動, 可以使用近端 (localhost) 或中端 (自建 server) 維護 Github 上的同步靜態網站 \n init.py 修改之後, Replit 並不會自行重新啟動網站, 必須關閉後重新執行 main.py 網站 title 才會更改. \n GIT_AUTHOR_NAME, GIT_AUTHOR_EMAIL, GIT_COMMITTER_NAME, GIT_COMMITTER_EMAIL \n', 'tags': '', 'url': 'Notice.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};