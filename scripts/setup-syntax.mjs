#!/usr/bin/env node
import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const REPO_URL = 'https://github.com/adarshrkumar/pscode-syntax-highlighter';
const TEMP_DIR = join(projectRoot, '.tmp-syntax');
const LANG_DIR = join(projectRoot, 'lang');

console.log('Setting up pscode syntax highlighting...');

try {
  // Remove existing temp directory if it exists
  if (existsSync(TEMP_DIR)) {
    console.log('Cleaning up existing temp directory...');
    execSync(`rmdir /s /q "${TEMP_DIR}"`, { stdio: 'inherit', shell: true });
  }

  // Clone the repository
  console.log('Cloning syntax highlighter repository...');
  execSync(`git clone --depth 1 "${REPO_URL}" "${TEMP_DIR}"`, { stdio: 'inherit' });

  // Create lang directory if it doesn't exist
  if (!existsSync(LANG_DIR)) {
    mkdirSync(LANG_DIR, { recursive: true });
  }

  // Copy relevant files from the root of the cloned repo
  const filesToCopy = ['example.pscode', 'language-configuration.json'];

  console.log('Copying language configuration files...');
  for (const file of filesToCopy) {
    const sourcePath = join(TEMP_DIR, file);
    const destPath = join(LANG_DIR, file);

    if (existsSync(sourcePath)) {
      copyFileSync(sourcePath, destPath);
      console.log(`  ✓ Copied ${file}`);
    } else {
      console.warn(`  ⚠ Warning: ${file} not found in repository`);
    }
  }

  // Copy syntaxes directory
  const syntaxesSource = join(TEMP_DIR, 'syntaxes');
  const syntaxesDest = join(LANG_DIR, 'syntaxes');

  if (existsSync(syntaxesSource)) {
    console.log('Copying syntax files...');
    if (!existsSync(syntaxesDest)) {
      mkdirSync(syntaxesDest, { recursive: true });
    }

    const syntaxFiles = readdirSync(syntaxesSource);
    for (const file of syntaxFiles) {
      copyFileSync(join(syntaxesSource, file), join(syntaxesDest, file));
      console.log(`  ✓ Copied syntaxes/${file}`);
    }
  }

  // Clean up temp directory
  console.log('Cleaning up...');
  execSync(`rmdir /s /q "${TEMP_DIR}"`, { stdio: 'inherit', shell: true });

  console.log('✓ Syntax highlighting setup complete!');
} catch (error) {
  console.error('Error setting up syntax highlighting:', error.message);

  // Attempt cleanup even on error
  if (existsSync(TEMP_DIR)) {
    try {
      execSync(`rmdir /s /q "${TEMP_DIR}"`, { stdio: 'inherit', shell: true });
    } catch (cleanupError) {
      console.warn('Warning: Could not clean up temp directory');
    }
  }

  process.exit(1);
}
