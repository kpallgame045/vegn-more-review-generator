const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const logoPath = path.join(publicDir, 'vegnmore-logo.jpg');
const outputMp4 = path.join(publicDir, 'vegnmore-pdpu-promo-reel.mp4');
const filterScriptPath = path.join(__dirname, 'reel-filters.txt');

console.log('Rendering Veg ’n More PDPU Branch 9:16 Instagram Reel...');
console.log('Logo input:', logoPath);
console.log('Target output:', outputMp4);

// Font path for ffmpeg on Windows: use forward slashes and escape the drive colon: C\:/Windows/Fonts/arialbd.ttf
const fontPath = 'C\\:/Windows/Fonts/arial.ttf';
const fontBold = fs.existsSync('C:/Windows/Fonts/arialbd.ttf')
  ? 'C\\:/Windows/Fonts/arialbd.ttf'
  : fontPath;

// Build filter graph
const filters = [
  // 1. Base vertical canvas: 1080x1920 @ 30fps
  `color=c=0x0a2316:s=1080x1920:d=15:r=30[bg0]`,
  `[bg0]drawbox=x=40:y=60:w=1000:h=1800:color=0x123c27@0.7:t=fill[bg1]`,
  `[bg1]drawbox=x=40:y=60:w=1000:h=1800:color=0x38a169@0.5:t=3[bg]`,

  // 2. Logo stream from input 0:v (scale to 320x320)
  `[0:v]scale=320:320:force_original_aspect_ratio=decrease,pad=320:320:(ow-iw)/2:(oh-ih)/2:color=0x00000000[logo]`,

  // 3. Scene 1 (0s to 3.8s) - Brand Identity & Location Hook
  `[bg][logo]overlay=x=(W-w)/2:y=340:enable='between(t,0,3.8)'[s1_a]`,
  `[s1_a]drawbox=x=290:y=240:w=500:h=60:color=0x22543d@0.9:t=fill[s1_b]`,
  `[s1_b]drawbox=x=290:y=240:w=500:h=60:color=0x48bb78@0.8:t=2[s1_c]`,
  `[s1_c]drawtext=fontfile='${fontBold}':text='PDPU ROAD - RAYSAN':fontcolor=0x68d391:fontsize=28:x=(w-text_w)/2:y=255:enable='between(t,0,3.8)'[s1_d]`,
  `[s1_d]drawtext=fontfile='${fontBold}':text='VEG N MORE':fontcolor=white:fontsize=72:x=(w-text_w)/2:y=720:enable='between(t,0,3.8)'[s1_e]`,
  `[s1_e]drawtext=fontfile='${fontBold}':text='FRESHNESS MEETS CONVENIENCE':fontcolor=0x48bb78:fontsize=34:x=(w-text_w)/2:y=810:enable='between(t,0,3.8)'[s1_f]`,
  `[s1_f]drawbox=x=120:y=900:w=840:h=260:color=0x061910@0.85:t=fill[s1_g]`,
  `[s1_g]drawbox=x=120:y=900:w=840:h=260:color=0x276749@0.6:t=2[s1_h]`,
  `[s1_h]drawtext=fontfile='${fontBold}':text='Your Premium Neighborhood Produce Store':fontcolor=white:fontsize=36:x=(w-text_w)/2:y=940:enable='between(t,0,3.8)'[s1_i]`,
  `[s1_i]drawtext=fontfile='${fontBold}':text='Neatly Sorted Vegetables & Fresh Fruits':fontcolor=0xa0aec0:fontsize=30:x=(w-text_w)/2:y=1000:enable='between(t,0,3.8)'[s1_j]`,
  `[s1_j]drawtext=fontfile='${fontBold}':text='Near Shagun-40, Raysan, Gandhinagar':fontcolor=0x38a169:fontsize=30:x=(w-text_w)/2:y=1060:enable='between(t,0,3.8)'[s1]`,

  // 4. Scene 2 (3.8s to 7.8s) - Neatly Packed Vegetables & Clean Hygiene
  `[s1][logo]overlay=x=(W-w)/2:y=180:enable='between(t,3.8,7.8)'[s2_a]`,
  `[s2_a]drawbox=x=240:y=100:w=600:h=50:color=0x1c4532@0.9:t=fill[s2_b]`,
  `[s2_b]drawtext=fontfile='${fontBold}':text='HYGIENE & CONVENIENCE':fontcolor=0x68d391:fontsize=26:x=(w-text_w)/2:y=112:enable='between(t,3.8,7.8)'[s2_c]`,
  `[s2_c]drawtext=fontfile='${fontBold}':text='NEATLY PACKED VEGETABLES':fontcolor=white:fontsize=56:x=(w-text_w)/2:y=540:enable='between(t,3.8,7.8)'[s2_d]`,
  `[s2_d]drawbox=x=100:y=640:w=880:h=440:color=0x071b11@0.9:t=fill[s2_e]`,
  `[s2_e]drawbox=x=100:y=640:w=880:h=440:color=0x38a169@0.5:t=2[s2_f]`,
  `[s2_f]drawtext=fontfile='${fontBold}':text='Pre-Packaged Daily Greens':fontcolor=0x48bb78:fontsize=38:x=160:y=700:enable='between(t,3.8,7.8)'[s2_g]`,
  `[s2_g]drawtext=fontfile='${fontPath}':text='- Clean, dust-free pre-cut & portioned veggies':fontcolor=white:fontsize=32:x=160:y=765:enable='between(t,3.8,7.8)'[s2_h]`,
  `[s2_h]drawtext=fontfile='${fontPath}':text='- Saves 30+ minutes of daily kitchen prep':fontcolor=white:fontsize=32:x=160:y=830:enable='between(t,3.8,7.8)'[s2_i]`,
  `[s2_i]drawtext=fontfile='${fontPath}':text='- Fresh spinach, coriander & seasonal greens':fontcolor=white:fontsize=32:x=160:y=895:enable='between(t,3.8,7.8)'[s2_j]`,
  `[s2_j]drawtext=fontfile='${fontPath}':text='- Clear price tags and transparent weights':fontcolor=0xa0aec0:fontsize=30:x=160:y=965:enable='between(t,3.8,7.8)'[s2_k]`,
  `[s2_k]drawbox=x=200:y=1140:w=680:h=80:color=0x22543d@0.9:t=fill[s2_l]`,
  `[s2_l]drawtext=fontfile='${fontBold}':text='Fresh Vegetables in Raysan, Gandhinagar':fontcolor=0x68d391:fontsize=32:x=(w-text_w)/2:y=1165:enable='between(t,3.8,7.8)'[s2]`,

  // 5. Scene 3 (7.8s to 11.5s) - Crisp Seasonal Fruits & Organized Displays
  `[s2][logo]overlay=x=(W-w)/2:y=180:enable='between(t,7.8,11.5)'[s3_a]`,
  `[s3_a]drawbox=x=260:y=100:w=560:h=50:color=0x1c4532@0.9:t=fill[s3_b]`,
  `[s3_b]drawtext=fontfile='${fontBold}':text='ORGANIZED STORE EXPERIENCE':fontcolor=0x68d391:fontsize=26:x=(w-text_w)/2:y=112:enable='between(t,7.8,11.5)'[s3_c]`,
  `[s3_c]drawtext=fontfile='${fontBold}':text='CRISP SEASONAL FRUITS':fontcolor=white:fontsize=56:x=(w-text_w)/2:y=540:enable='between(t,7.8,11.5)'[s3_d]`,
  `[s3_d]drawbox=x=100:y=640:w=880:h=440:color=0x071b11@0.9:t=fill[s3_e]`,
  `[s3_e]drawbox=x=100:y=640:w=880:h=440:color=0x38a169@0.5:t=2[s3_f]`,
  `[s3_f]drawtext=fontfile='${fontBold}':text='Clean Shelves & Handpicked Produce':fontcolor=0x48bb78:fontsize=38:x=160:y=700:enable='between(t,7.8,11.5)'[s3_g]`,
  `[s3_g]drawtext=fontfile='${fontPath}':text='- Fresh arrivals every morning from trusted farms':fontcolor=white:fontsize=32:x=160:y=765:enable='between(t,7.8,11.5)'[s3_h]`,
  `[s3_h]drawtext=fontfile='${fontPath}':text='- Perfectly arranged, color-sorted produce racks':fontcolor=white:fontsize=32:x=160:y=830:enable='between(t,7.8,11.5)'[s3_i]`,
  `[s3_i]drawtext=fontfile='${fontPath}':text='- Apples, citrus, pomegranates & exotic fruits':fontcolor=white:fontsize=32:x=160:y=895:enable='between(t,7.8,11.5)'[s3_j]`,
  `[s3_j]drawtext=fontfile='${fontPath}':text='- Cold-stored items for maximum crispness':fontcolor=0xa0aec0:fontsize=30:x=160:y=965:enable='between(t,7.8,11.5)'[s3_k]`,
  `[s3_k]drawbox=x=220:y=1140:w=640:h=80:color=0x22543d@0.9:t=fill[s3_l]`,
  `[s3_l]drawtext=fontfile='${fontBold}':text='Fruit Shop near PDPU Road':fontcolor=0x68d391:fontsize=32:x=(w-text_w)/2:y=1165:enable='between(t,7.8,11.5)'[s3]`,

  // 6. Scene 4 (11.5s to 15.0s) - Location, Store Hours & Google Review CTA
  `[s3][logo]overlay=x=(W-w)/2:y=160:enable='gte(t,11.5)'[s4_a]`,
  `[s4_a]drawtext=fontfile='${fontBold}':text='VISIT US TODAY':fontcolor=white:fontsize=64:x=(w-text_w)/2:y=520:enable='gte(t,11.5)'[s4_b]`,
  `[s4_b]drawbox=x=100:y=620:w=880:h=500:color=0x071b11@0.92:t=fill[s4_c]`,
  `[s4_c]drawbox=x=100:y=620:w=880:h=500:color=0x48bb78@0.7:t=2[s4_d]`,
  `[s4_d]drawtext=fontfile='${fontBold}':text='Veg n More - PDPU Branch':fontcolor=0x48bb78:fontsize=42:x=(w-text_w)/2:y=670:enable='gte(t,11.5)'[s4_e]`,
  `[s4_e]drawtext=fontfile='${fontBold}':text='JB Corner, PDPU Road, near Shagun-40':fontcolor=white:fontsize=34:x=(w-text_w)/2:y=740:enable='gte(t,11.5)'[s4_f]`,
  `[s4_f]drawtext=fontfile='${fontPath}':text='Raysan, Gandhinagar, Gujarat 382426':fontcolor=0xa0aec0:fontsize=30:x=(w-text_w)/2:y=800:enable='gte(t,11.5)'[s4_g]`,
  `[s4_g]drawtext=fontfile='${fontBold}':text='Easy Parking  -  Quick UPI Billing':fontcolor=0x68d391:fontsize=30:x=(w-text_w)/2:y=870:enable='gte(t,11.5)'[s4_h]`,
  `[s4_h]drawtext=fontfile='${fontBold}':text='Open Every Day - Morning and Evening':fontcolor=white:fontsize=32:x=(w-text_w)/2:y=940:enable='gte(t,11.5)'[s4_i]`,
  `[s4_i]drawtext=fontfile='${fontBold}':text='Rated 4.9 Stars - Community Favorite':fontcolor=0xf6e05e:fontsize=32:x=(w-text_w)/2:y=1010:enable='gte(t,11.5)'[s4_j]`,
  `[s4_j]drawbox=x=140:y=1160:w=800:h=90:color=0x22543d@0.95:t=fill[s4_k]`,
  `[s4_k]drawbox=x=140:y=1160:w=800:h=90:color=0x48bb78@0.8:t=2[s4_l]`,
  `[s4_l]drawtext=fontfile='${fontBold}':text='Vegetable Store in Raysan, Gandhinagar':fontcolor=white:fontsize=34:x=(w-text_w)/2:y=1190:enable='gte(t,11.5)'[outv]`,

  // 7. Ambient background audio (gentle chord harmony)
  `sine=frequency=440:duration=15[a1]`,
  `sine=frequency=554.37:duration=15[a2]`,
  `sine=frequency=659.25:duration=15[a3]`,
  `[a1][a2][a3]amix=inputs=3:duration=first:dropout_transition=2,volume=0.10,afade=t=in:ss=0:d=1,afade=t=out:st=14:d=1[outa]`
];

fs.writeFileSync(filterScriptPath, filters.join(';\n'), 'utf8');
console.log('Wrote filter graph to:', filterScriptPath);

const ffmpegArgs = [
  'ffmpeg',
  '-y',
  '-loop 1',
  `-i "${logoPath.replace(/\\/g, '/')}"`,
  `-filter_complex_script "${filterScriptPath.replace(/\\/g, '/')}"`,
  '-map "[outv]"',
  '-map "[outa]"',
  '-c:v libx264',
  '-pix_fmt yuv420p',
  '-preset medium',
  '-crf 20',
  '-c:a aac',
  '-b:a 192k',
  '-t 15',
  `"${outputMp4.replace(/\\/g, '/')}"`
];

const cmd = ffmpegArgs.join(' ');
console.log('Running ffmpeg...');
try {
  execSync(cmd, { stdio: 'inherit' });
  const stats = fs.statSync(outputMp4);
  console.log(`\n🎉 Success! Rendered MP4: ${outputMp4}`);
  console.log(`Video size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
} catch (e) {
  console.error('ffmpeg failed:', e.message);
  process.exit(1);
}
