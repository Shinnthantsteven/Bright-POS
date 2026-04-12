#!/bin/bash
# ─────────────────────────────────────────────
#  Bright POS — GitHub Setup Script (Mac)
#  Run this once from your Terminal
# ─────────────────────────────────────────────

echo "🌟 Setting up Bright POS on GitHub..."

# 1. Go to the project folder (already in Downloads/bright-pos)
cd "$(dirname "$0")"

# 2. Init git
git init
git add .
git commit -m "🌟 Bright POS v1 — complete system (27 features)"

echo ""
echo "✅ Git repo ready!"
echo ""
echo "─────────────────────────────────────────"
echo "Next steps:"
echo ""
echo "1. Go to https://github.com/new"
echo "   - Name: bright-pos"
echo "   - Public"
echo "   - DON'T add README or .gitignore"
echo "   - Click Create repository"
echo ""
echo "2. Then run these 3 commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/bright-pos.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   Repo → Settings → Pages → Branch: main → Save"
echo ""
echo "4. Your live URL will be:"
echo "   https://YOUR_USERNAME.github.io/bright-pos/bright-pos.html"
echo "─────────────────────────────────────────"
