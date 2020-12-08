git add .
echo enter commit message:
read -r MSG
git commit -m "$MSG"
git push
