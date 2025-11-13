#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
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
    if (fs.existsSync(TEMP_DIR)) {
        console.log('Cleaning up existing temp directory...');
        fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }

    // Clone the repository
    console.log('Cloning syntax highlighter repository...');
    execSync(`git clone --depth 1 "${REPO_URL}" "${TEMP_DIR}"`, { stdio: 'inherit' });

    // Create lang directory if it doesn't exist
    if (!fs.existsSync(LANG_DIR)) {
        fs.mkdirSync(LANG_DIR, { recursive: true });
    }

    // Copy relevant files from the root of the cloned repo
    const filesToCopy = ['example.pscode', 'language-configuration.json'];

    console.log('Copying language configuration files...');
    for (const file of filesToCopy) {
        const sourcePath = join(TEMP_DIR, file);
        const destPath = join(LANG_DIR, file);

        if (fs.existsSync(sourcePath)) {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`  ✓ Copied ${file}`);
        } else {
            console.warn(`  ⚠ Warning: ${file} not found in repository`);
        }
    }

    // Copy syntaxes directory
    const syntaxesSource = join(TEMP_DIR, 'syntaxes');
    const syntaxesDest = join(LANG_DIR, 'syntaxes');

    if (fs.existsSync(syntaxesSource)) {
        console.log('Copying syntax files...');
        if (!fs.existsSync(syntaxesDest)) {
            fs.mkdirSync(syntaxesDest, { recursive: true });
        }

        const syntaxFiles = fs.readdirSync(syntaxesSource);
        for (const file of syntaxFiles) {
            fs.copyFileSync(join(syntaxesSource, file), join(syntaxesDest, file));
            console.log(`  ✓ Copied syntaxes/${file}`);
        }
    }

    // Clean up temp directory
    console.log('Cleaning up...');
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });

    console.log('✓ Syntax highlighting setup complete!');
} catch (error) {
    console.error('Error setting up syntax highlighting:', error.message);

    // Attempt cleanup even on error
    if (fs.existsSync(TEMP_DIR)) {
        try {
            fs.rmSync(TEMP_DIR, { recursive: true, force: true });
        } catch (cleanupError) {
            console.warn('Warning: Could not clean up temp directory');
        }
    }

    process.exit(1);
}
