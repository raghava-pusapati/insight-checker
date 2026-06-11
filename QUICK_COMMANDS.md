# ⚡ Quick Git Commands Reference

## Daily Git Workflow

### Check Status
```bash
git status
```

### Make Changes and Commit

#### Option 1: Use the automation script (Recommended)
```bash
# Windows
scripts\daily-commit.bat

# Linux/Mac
bash scripts/daily-commit.sh
```

#### Option 2: Manual commits
```bash
# Stage all changes
git add .

# Commit with message
git commit -m "feat: Add new feature"

# Push to GitHub
git push
```

## Commit Message Types

```bash
# New feature
git commit -m "feat: Add dark mode toggle"

# Bug fix
git commit -m "fix: Resolve mobile menu issue"

# Documentation
git commit -m "docs: Update installation guide"

# Code refactoring
git commit -m "refactor: Improve component structure"

# Styling changes
git commit -m "style: Update button colors"

# Performance improvement
git commit -m "perf: Optimize image loading"

# Tests
git commit -m "test: Add unit tests for Dashboard"

# Maintenance
git commit -m "chore: Update dependencies"
```

## Common Tasks

### Pull Latest Changes
```bash
git pull origin main
```

### Create a New Branch
```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Push branch to GitHub
git push -u origin feature/new-feature
```

### View Commit History
```bash
# Simple view
git log --oneline

# Detailed view
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

### Undo Last Commit (Before Push)
```bash
# Keep changes but undo commit
git reset --soft HEAD~1

# Discard changes and undo commit
git reset --hard HEAD~1
```

### Update .gitignore
```bash
# After adding files to .gitignore
git rm -r --cached .
git add .
git commit -m "chore: Update .gitignore"
git push
```

## GitHub Specific

### View Remote URL
```bash
git remote -v
```

### Check GitHub Actions Status
Visit: https://github.com/raghava-pusapati/insight-checker/actions

## Useful Aliases (Optional)

Add these to your git config for shortcuts:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'
```

Then use:
```bash
git st        # instead of git status
git co main   # instead of git checkout main
git ci -m "message"  # instead of git commit -m "message"
```

## Daily Routine

### Morning
```bash
git pull origin main
```

### During Work
```bash
# Make changes to files
git status
git add .
git commit -m "type: description"
```

### End of Day
```bash
git push origin main
```

## Quick Push Everything
```bash
git add . && git commit -m "chore: Daily updates" && git push
```

## Emergency: Discard All Local Changes
```bash
# WARNING: This will delete all your local changes!
git reset --hard HEAD
git clean -fd
```

## See Changes Before Committing
```bash
# See all changes
git diff

# See changes for specific file
git diff filename.tsx
```

## Branches

### List All Branches
```bash
git branch -a
```

### Switch Branch
```bash
git checkout main
git checkout develop
```

### Delete Branch
```bash
# Delete local branch
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

## Collaboration

### Create Pull Request
```bash
# After pushing your branch
# Go to GitHub and click "Compare & pull request"
```

### Update Fork
```bash
# Add upstream remote (only once)
git remote add upstream https://github.com/original/repository.git

# Fetch and merge
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Troubleshooting

### Authentication Issues
```bash
# Windows
git config --global credential.helper wincred

# Linux/Mac
git config --global credential.helper cache
```

### Merge Conflicts
```bash
# View files with conflicts
git status

# After resolving conflicts manually
git add .
git commit -m "fix: Resolve merge conflicts"
git push
```

### Force Push (Use with Caution!)
```bash
# Only do this if you're sure and working alone!
git push --force origin main
```

## GitHub Profile Quick Links

- Your Profile: https://github.com/raghava-pusapati
- Your Repository: https://github.com/raghava-pusapati/insight-checker
- Repository Settings: https://github.com/raghava-pusapati/insight-checker/settings
- GitHub Actions: https://github.com/raghava-pusapati/insight-checker/actions
- Your Profile Settings: https://github.com/settings/profile

---

💡 **Tip**: Run `git status` frequently to see what's changed!
