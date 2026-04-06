#!/bin/bash
# Quick setup script for the portfolio

echo "🚀 Portfolio Setup Script"
echo "========================"
echo ""

# Check Node.js version
NODE_VERSION=$(node -v)
echo "✓ Node.js version: $NODE_VERSION"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
  echo "✓ Dependencies installed successfully"
else
  echo "✗ Failed to install dependencies"
  exit 1
fi

# Create necessary directories if they don't exist
echo ""
echo "📁 Ensuring directory structure..."
mkdir -p src/styles
mkdir -p src/components
mkdir -p src/layouts
mkdir -p src/pages
mkdir -p public
echo "✓ Directory structure ready"

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Update personal info in src/components/"
echo "  2. Customize colors in tailwind.config.cjs"
echo "  3. Run: npm run dev"
echo "  4. Open: http://localhost:3000"
echo ""
