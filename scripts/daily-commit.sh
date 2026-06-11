#!/bin/bash

# Daily Commit Automation Script
# This script helps you make regular commits with meaningful messages

echo "🚀 Daily Commit Helper"
echo "====================="
echo ""

# Array of commit type prefixes
declare -a TYPES=("feat" "fix" "docs" "style" "refactor" "perf" "test" "chore")
declare -a SUGGESTIONS=(
    "Update documentation and improve code comments"
    "Refactor component structure for better maintainability"
    "Improve error handling and validation"
    "Optimize performance and reduce bundle size"
    "Add type safety and TypeScript improvements"
    "Update dependencies to latest versions"
    "Improve UI/UX and accessibility"
    "Add unit tests and improve test coverage"
    "Fix linting issues and code formatting"
    "Update README with better examples"
)

# Show git status
echo "📊 Current Git Status:"
git status --short
echo ""

# Ask user for commit type
echo "Select commit type:"
echo "1) feat     - New feature"
echo "2) fix      - Bug fix"
echo "3) docs     - Documentation"
echo "4) style    - Formatting/styling"
echo "5) refactor - Code refactoring"
echo "6) perf     - Performance improvement"
echo "7) test     - Adding tests"
echo "8) chore    - Maintenance"
echo ""
read -p "Enter choice (1-8): " choice

case $choice in
    1) TYPE="feat";;
    2) TYPE="fix";;
    3) TYPE="docs";;
    4) TYPE="style";;
    5) TYPE="refactor";;
    6) TYPE="perf";;
    7) TYPE="test";;
    8) TYPE="chore";;
    *) TYPE="chore";;
esac

# Get random suggestion
RANDOM_INDEX=$((RANDOM % ${#SUGGESTIONS[@]}))
SUGGESTION=${SUGGESTIONS[$RANDOM_INDEX]}

echo ""
echo "💡 Suggestion: $SUGGESTION"
echo ""
read -p "Enter commit message (or press Enter to use suggestion): " MESSAGE

if [ -z "$MESSAGE" ]; then
    MESSAGE=$SUGGESTION
fi

# Full commit message
FULL_MESSAGE="$TYPE: $MESSAGE"

echo ""
echo "📝 Commit message: $FULL_MESSAGE"
echo ""
read -p "Proceed with commit? (y/n): " CONFIRM

if [ "$CONFIRM" = "y" ] || [ "$CONFIRM" = "Y" ]; then
    git add .
    git commit -m "$FULL_MESSAGE"
    echo ""
    echo "✅ Committed successfully!"
    echo ""
    read -p "Push to remote? (y/n): " PUSH
    
    if [ "$PUSH" = "y" ] || [ "$PUSH" = "Y" ]; then
        git push
        echo ""
        echo "🎉 Pushed to remote successfully!"
    fi
else
    echo "❌ Commit cancelled"
fi
