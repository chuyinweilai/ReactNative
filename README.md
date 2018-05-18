#参考https://github.com/MIFind/react-native-OneLess项目开发

│  .babelrc
│  .buckconfig
│  .flowconfig
│  .gitattributes
│  .gitignore
│  app.json
│  index.js
│  package.json
│  README.md
│  tsconfig.json
│  yarn-error.log
│  yarn.lock
│  
├─.vscode
├─android
│  │  .project
│  │  build.gradle
│  │  gradle.properties
│  │  gradlew
│  │  gradlew.bat
│  │  settings.gradle
│  │  
│  ├─.gradle
│  │  └─2.14.1
│  │      ├─taskArtifacts
│  │      │      cache.properties
│  │      │      cache.properties.lock
│  │      │      fileHashes.bin
│  │      │      fileSnapshots.bin
│  │      │      fileSnapshotsToTreeSnapshotsIndex.bin
│  │      │      taskArtifacts.bin
│  │      │      
│  │      └─tasks
│  │          ├─_app_compileDebugJavaWithJavac
│  │          │  ├─localClassSetAnalysis
│  │          │  │      localClassSetAnalysis.bin
│  │          │  │      localClassSetAnalysis.lock
│  │          │  │      
│  │          │  └─localJarClasspathSnapshot
│  │          │          localJarClasspathSnapshot.bin
│  │          │          localJarClasspathSnapshot.lock
│  │          │          
│  │          └─_react-native-splash-screen_compileReleaseJavaWithJavac
│  │              ├─localClassSetAnalysis
│  │              │      localClassSetAnalysis.bin
│  │              │      localClassSetAnalysis.lock
│  │              │      
│  │              └─localJarClasspathSnapshot
│  │                      localJarClasspathSnapshot.bin
│  │                      localJarClasspathSnapshot.lock
│  │                      
│  ├─.settings
│  │      org.eclipse.buildship.core.prefs
│  │      
│  ├─app
│  │  │  .classpath
│  │  │  .project
│  │  │  BUCK
│  │  │  build.gradle
│  │  │  proguard-rules.pro
│  │  │  
│  │  ├─.settings
│  │  │      org.eclipse.buildship.core.prefs
│  │  │      
│  │  ├─build
│  │  │  ├─generated
│  │  │  │  ├─assets
│  │  │  │  │  └─shaders
│  │  │  │  │      └─debug
│  │  │  │  ├─res
│  │  │  │  │  ├─resValues
│  │  │  │  │  │  └─debug
│  │  │  │  │  └─rs
│  │  │  │  │      └─debug
│  │  │  │  └─source
│  │  │  │      ├─aidl
│  │  │  │      │  └─debug
│  │  │  │      ├─apt
│  │  │  │      │  └─debug
│  │  │  │      ├─buildConfig
│  │  │  │      │  └─debug
│  │  │  │      │      └─com
│  │  │  │      │          └─app
│  │  │  │      │                  BuildConfig.java
│  │  │  │      │                  
│  │  │  │      ├─r
│  │  │  │      │  └─debug
│  │  │  │      │      ├─android
│  │  │  │      │      │  └─support
│  │  │  │      │      │      └─v7
│  │  │  │      │      │          └─appcompat
│  │  │  │      │      │                  R.java
│  │  │  │      │      │                  
│  │  │  │      │      ├─com
│  │  │  │      │      │  ├─app
│  │  │  │      │      │  │      R.java
│  │  │  │      │      │  │      
│  │  │  │      │      │  └─facebook
│  │  │  │      │      │      ├─drawee
│  │  │  │      │      │      │  │  R.java
│  │  │  │      │      │      │  │  
│  │  │  │      │      │      │  └─backends
│  │  │  │      │      │      │      └─pipeline
│  │  │  │      │      │      │              R.java
│  │  │  │      │      │      │              
│  │  │  │      │      │      ├─fbui
│  │  │  │      │      │      │  └─textlayoutbuilder
│  │  │  │      │      │      │          R.java
│  │  │  │      │      │      │          
│  │  │  │      │      │      ├─react
│  │  │  │      │      │      │      R.java
│  │  │  │      │      │      │      
│  │  │  │      │      │      └─soloader
│  │  │  │      │      │              R.java
│  │  │  │      │      │              
│  │  │  │      │      └─org
│  │  │  │      │          ├─devio
│  │  │  │      │          │  └─rn
│  │  │  │      │          │      └─splashscreen
│  │  │  │      │          │              R.java
│  │  │  │      │          │              
│  │  │  │      │          └─webkit
│  │  │  │      │              └─android_jsc
│  │  │  │      │                      R.java
│  │  │  │      │                      
│  │  │  │      └─rs
│  │  │  │          └─debug
│  │  │  ├─intermediates
│  │  │  │  ├─assets
│  │  │  │  │  └─debug
│  │  │  │  ├─blame
│  │  │  │  │  └─res
│  │  │  │  │      └─debug
│  │  │  │  │          ├─multi
│  │  │  │  │          │      values-af.json
│  │  │  │  │          │      values-am.json
│  │  │  │  │          │      values-ar.json
│  │  │  │  │          │      values-az-rAZ.json
│  │  │  │  │          │      values-bg.json
│  │  │  │  │          │      values-bn-rBD.json
│  │  │  │  │          │      values-ca.json
│  │  │  │  │          │      values-cs.json
│  │  │  │  │          │      values-da.json
│  │  │  │  │          │      values-de.json
│  │  │  │  │          │      values-el.json
│  │  │  │  │          │      values-en-rAU.json
│  │  │  │  │          │      values-en-rGB.json
│  │  │  │  │          │      values-en-rIN.json
│  │  │  │  │          │      values-es-rUS.json
│  │  │  │  │          │      values-es.json
│  │  │  │  │          │      values-et-rEE.json
│  │  │  │  │          │      values-eu-rES.json
│  │  │  │  │          │      values-fa.json
│  │  │  │  │          │      values-fi.json
│  │  │  │  │          │      values-fr-rCA.json
│  │  │  │  │          │      values-fr.json
│  │  │  │  │          │      values-gl-rES.json
│  │  │  │  │          │      values-gu-rIN.json
│  │  │  │  │          │      values-h320dp-v13.json
│  │  │  │  │          │      values-h720dp-v13.json
│  │  │  │  │          │      values-hdpi-v4.json
│  │  │  │  │          │      values-hi.json
│  │  │  │  │          │      values-hr.json
│  │  │  │  │          │      values-hu.json
│  │  │  │  │          │      values-hy-rAM.json
│  │  │  │  │          │      values-in.json
│  │  │  │  │          │      values-is-rIS.json
│  │  │  │  │          │      values-it.json
│  │  │  │  │          │      values-iw.json
│  │  │  │  │          │      values-ja.json
│  │  │  │  │          │      values-ka-rGE.json
│  │  │  │  │          │      values-kk-rKZ.json
│  │  │  │  │          │      values-km-rKH.json
│  │  │  │  │          │      values-kn-rIN.json
│  │  │  │  │          │      values-ko.json
│  │  │  │  │          │      values-ky-rKG.json
│  │  │  │  │          │      values-land.json
│  │  │  │  │          │      values-large-v4.json
│  │  │  │  │          │      values-ldltr-v21.json
│  │  │  │  │          │      values-lo-rLA.json
│  │  │  │  │          │      values-lt.json
│  │  │  │  │          │      values-lv.json
│  │  │  │  │          │      values-mk-rMK.json
│  │  │  │  │          │      values-ml-rIN.json
│  │  │  │  │          │      values-mn-rMN.json
│  │  │  │  │          │      values-mr-rIN.json
│  │  │  │  │          │      values-ms-rMY.json
│  │  │  │  │          │      values-my-rMM.json
│  │  │  │  │          │      values-nb.json
│  │  │  │  │          │      values-ne-rNP.json
│  │  │  │  │          │      values-night-v8.json
│  │  │  │  │          │      values-nl.json
│  │  │  │  │          │      values-pa-rIN.json
│  │  │  │  │          │      values-pl.json
│  │  │  │  │          │      values-port.json
│  │  │  │  │          │      values-pt-rBR.json
│  │  │  │  │          │      values-pt-rPT.json
│  │  │  │  │          │      values-pt.json
│  │  │  │  │          │      values-ro.json
│  │  │  │  │          │      values-ru.json
│  │  │  │  │          │      values-si-rLK.json
│  │  │  │  │          │      values-sk.json
│  │  │  │  │          │      values-sl.json
│  │  │  │  │          │      values-sq-rAL.json
│  │  │  │  │          │      values-sr.json
│  │  │  │  │          │      values-sv.json
│  │  │  │  │          │      values-sw.json
│  │  │  │  │          │      values-sw600dp-v13.json
│  │  │  │  │          │      values-ta-rIN.json
│  │  │  │  │          │      values-te-rIN.json
│  │  │  │  │          │      values-th.json
│  │  │  │  │          │      values-tl.json
│  │  │  │  │          │      values-tr.json
│  │  │  │  │          │      values-uk.json
│  │  │  │  │          │      values-ur-rPK.json
│  │  │  │  │          │      values-uz-rUZ.json
│  │  │  │  │          │      values-v11.json
│  │  │  │  │          │      values-v12.json
│  │  │  │  │          │      values-v13.json
│  │  │  │  │          │      values-v14.json
│  │  │  │  │          │      values-v17.json
│  │  │  │  │          │      values-v18.json
│  │  │  │  │          │      values-v21.json
│  │  │  │  │          │      values-v22.json
│  │  │  │  │          │      values-v23.json
│  │  │  │  │          │      values-vi.json
│  │  │  │  │          │      values-w360dp-v13.json
│  │  │  │  │          │      values-w480dp-v13.json
│  │  │  │  │          │      values-w500dp-v13.json
│  │  │  │  │          │      values-w600dp-v13.json
│  │  │  │  │          │      values-w720dp-v13.json
│  │  │  │  │          │      values-xlarge-land-v4.json
│  │  │  │  │          │      values-xlarge-v4.json
│  │  │  │  │          │      values-zh-rCN.json
│  │  │  │  │          │      values-zh-rHK.json
│  │  │  │  │          │      values-zh-rTW.json
│  │  │  │  │          │      values-zu.json
│  │  │  │  │          │      values.json
│  │  │  │  │          │      
│  │  │  │  │          └─single
│  │  │  │  │                  anim.json
│  │  │  │  │                  color-v11.json
│  │  │  │  │                  color-v23.json
│  │  │  │  │                  color.json
│  │  │  │  │                  drawable-hdpi-v4.json
│  │  │  │  │                  drawable-ldrtl-hdpi-v17.json
│  │  │  │  │                  drawable-ldrtl-mdpi-v17.json
│  │  │  │  │                  drawable-ldrtl-xhdpi-v17.json
│  │  │  │  │                  drawable-ldrtl-xxhdpi-v17.json
│  │  │  │  │                  drawable-ldrtl-xxxhdpi-v17.json
│  │  │  │  │                  drawable-mdpi-v4.json
│  │  │  │  │                  drawable-v21.json
│  │  │  │  │                  drawable-v23.json
│  │  │  │  │                  drawable-xhdpi-v4.json
│  │  │  │  │                  drawable-xxhdpi-v4.json
│  │  │  │  │                  drawable-xxxhdpi-v4.json
│  │  │  │  │                  drawable.json
│  │  │  │  │                  layout.json
│  │  │  │  │                  mipmap-hdpi.json
│  │  │  │  │                  mipmap-mdpi.json
│  │  │  │  │                  mipmap-xhdpi.json
│  │  │  │  │                  mipmap-xxhdpi.json
│  │  │  │  │                  xml.json
│  │  │  │  │                  
│  │  │  │  ├─classes
│  │  │  │  │  └─debug
│  │  │  │  │      ├─android
│  │  │  │  │      │  └─support
│  │  │  │  │      │      └─v7
│  │  │  │  │      │          └─appcompat
│  │  │  │  │      │                  R$anim.class
│  │  │  │  │      │                  R$attr.class
│  │  │  │  │      │                  R$bool.class
│  │  │  │  │      │                  R$color.class
│  │  │  │  │      │                  R$dimen.class
│  │  │  │  │      │                  R$drawable.class
│  │  │  │  │      │                  R$id.class
│  │  │  │  │      │                  R$integer.class
│  │  │  │  │      │                  R$layout.class
│  │  │  │  │      │                  R$string.class
│  │  │  │  │      │                  R$style.class
│  │  │  │  │      │                  R$styleable.class
│  │  │  │  │      │                  R.class
│  │  │  │  │      │                  
│  │  │  │  │      ├─com
│  │  │  │  │      │  ├─app
│  │  │  │  │      │  │      BuildConfig.class
│  │  │  │  │      │  │      MainActivity.class
│  │  │  │  │      │  │      MainApplication$1.class
│  │  │  │  │      │  │      MainApplication.class
│  │  │  │  │      │  │      R$anim.class
│  │  │  │  │      │  │      R$attr.class
│  │  │  │  │      │  │      R$bool.class
│  │  │  │  │      │  │      R$color.class
│  │  │  │  │      │  │      R$dimen.class
│  │  │  │  │      │  │      R$drawable.class
│  │  │  │  │      │  │      R$id.class
│  │  │  │  │      │  │      R$integer.class
│  │  │  │  │      │  │      R$layout.class
│  │  │  │  │      │  │      R$mipmap.class
│  │  │  │  │      │  │      R$string.class
│  │  │  │  │      │  │      R$style.class
│  │  │  │  │      │  │      R$styleable.class
│  │  │  │  │      │  │      R$xml.class
│  │  │  │  │      │  │      R.class
│  │  │  │  │      │  │      
│  │  │  │  │      │  └─facebook
│  │  │  │  │      │      ├─drawee
│  │  │  │  │      │      │  │  R$attr.class
│  │  │  │  │      │      │  │  R$id.class
│  │  │  │  │      │      │  │  R$styleable.class
│  │  │  │  │      │      │  │  R.class
│  │  │  │  │      │      │  │  
│  │  │  │  │      │      │  └─backends
│  │  │  │  │      │      │      └─pipeline
│  │  │  │  │      │      │              R$attr.class
│  │  │  │  │      │      │              R$id.class
│  │  │  │  │      │      │              R$styleable.class
│  │  │  │  │      │      │              R.class
│  │  │  │  │      │      │              
│  │  │  │  │      │      ├─fbui
│  │  │  │  │      │      │  └─textlayoutbuilder
│  │  │  │  │      │      │          R$styleable.class
│  │  │  │  │      │      │          R.class
│  │  │  │  │      │      │          
│  │  │  │  │      │      ├─react
│  │  │  │  │      │      │      R$anim.class
│  │  │  │  │      │      │      R$attr.class
│  │  │  │  │      │      │      R$bool.class
│  │  │  │  │      │      │      R$color.class
│  │  │  │  │      │      │      R$dimen.class
│  │  │  │  │      │      │      R$drawable.class
│  │  │  │  │      │      │      R$id.class
│  │  │  │  │      │      │      R$integer.class
│  │  │  │  │      │      │      R$layout.class
│  │  │  │  │      │      │      R$string.class
│  │  │  │  │      │      │      R$style.class
│  │  │  │  │      │      │      R$styleable.class
│  │  │  │  │      │      │      R$xml.class
│  │  │  │  │      │      │      R.class
│  │  │  │  │      │      │      
│  │  │  │  │      │      └─soloader
│  │  │  │  │      │              R.class
│  │  │  │  │      │              
│  │  │  │  │      └─org
│  │  │  │  │          ├─devio
│  │  │  │  │          │  └─rn
│  │  │  │  │          │      └─splashscreen
│  │  │  │  │          │              R$anim.class
│  │  │  │  │          │              R$attr.class
│  │  │  │  │          │              R$bool.class
│  │  │  │  │          │              R$color.class
│  │  │  │  │          │              R$dimen.class
│  │  │  │  │          │              R$drawable.class
│  │  │  │  │          │              R$id.class
│  │  │  │  │          │              R$integer.class
│  │  │  │  │          │              R$layout.class
│  │  │  │  │          │              R$string.class
│  │  │  │  │          │              R$style.class
│  │  │  │  │          │              R$styleable.class
│  │  │  │  │          │              R$xml.class
│  │  │  │  │          │              R.class
│  │  │  │  │          │              
│  │  │  │  │          └─webkit
│  │  │  │  │              └─android_jsc
│  │  │  │  │                      R.class
│  │  │  │  │                      
│  │  │  │  ├─dependency-cache
│  │  │  │  │  └─debug
│  │  │  │  ├─exploded-aar
│  │  │  │  │  ├─app
│  │  │  │  │  │  └─react-native-splash-screen
│  │  │  │  │  │      └─unspecified
│  │  │  │  │  │          │  AndroidManifest.xml
│  │  │  │  │  │          │  R.txt
│  │  │  │  │  │          │  
│  │  │  │  │  │          ├─aidl
│  │  │  │  │  │          ├─assets
│  │  │  │  │  │          ├─jars
│  │  │  │  │  │          │      classes.jar
│  │  │  │  │  │          │      
│  │  │  │  │  │          ├─jni
│  │  │  │  │  │          ├─libs
│  │  │  │  │  │          └─res
│  │  │  │  │  │              └─values
│  │  │  │  │  │                      values.xml
│  │  │  │  │  │                      
│  │  │  │  │  ├─com.android.support
│  │  │  │  │  │  ├─animated-vector-drawable
│  │  │  │  │  │  │  └─23.4.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aapt
│  │  │  │  │  │  │      │      AndroidManifest.xml
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │      classes.jar
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  ├─appcompat-v7
│  │  │  │  │  │  │  └─23.4.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  annotations.zip
│  │  │  │  │  │  │      │  public.txt
│  │  │  │  │  │  │      │  R.txt
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aapt
│  │  │  │  │  │  │      │      AndroidManifest.xml
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │      classes.jar
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  │          ├─anim
│  │  │  │  │  │  │          │      abc_fade_in.xml
│  │  │  │  │  │  │          │      abc_fade_out.xml
│  │  │  │  │  │  │          │      abc_grow_fade_in_from_bottom.xml
│  │  │  │  │  │  │          │      abc_popup_enter.xml
│  │  │  │  │  │  │          │      abc_popup_exit.xml
│  │  │  │  │  │  │          │      abc_shrink_fade_out_from_bottom.xml
│  │  │  │  │  │  │          │      abc_slide_in_bottom.xml
│  │  │  │  │  │  │          │      abc_slide_in_top.xml
│  │  │  │  │  │  │          │      abc_slide_out_bottom.xml
│  │  │  │  │  │  │          │      abc_slide_out_top.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─color
│  │  │  │  │  │  │          │      abc_background_cache_hint_selector_material_dark.xml
│  │  │  │  │  │  │          │      abc_background_cache_hint_selector_material_light.xml
│  │  │  │  │  │  │          │      abc_primary_text_disable_only_material_dark.xml
│  │  │  │  │  │  │          │      abc_primary_text_disable_only_material_light.xml
│  │  │  │  │  │  │          │      abc_primary_text_material_dark.xml
│  │  │  │  │  │  │          │      abc_primary_text_material_light.xml
│  │  │  │  │  │  │          │      abc_search_url_text.xml
│  │  │  │  │  │  │          │      abc_secondary_text_material_dark.xml
│  │  │  │  │  │  │          │      abc_secondary_text_material_light.xml
│  │  │  │  │  │  │          │      switch_thumb_material_dark.xml
│  │  │  │  │  │  │          │      switch_thumb_material_light.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─color-v11
│  │  │  │  │  │  │          │      abc_background_cache_hint_selector_material_dark.xml
│  │  │  │  │  │  │          │      abc_background_cache_hint_selector_material_light.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─color-v23
│  │  │  │  │  │  │          │      abc_color_highlight_material.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable
│  │  │  │  │  │  │          │      abc_btn_borderless_material.xml
│  │  │  │  │  │  │          │      abc_btn_check_material.xml
│  │  │  │  │  │  │          │      abc_btn_colored_material.xml
│  │  │  │  │  │  │          │      abc_btn_default_mtrl_shape.xml
│  │  │  │  │  │  │          │      abc_btn_radio_material.xml
│  │  │  │  │  │  │          │      abc_cab_background_internal_bg.xml
│  │  │  │  │  │  │          │      abc_cab_background_top_material.xml
│  │  │  │  │  │  │          │      abc_dialog_material_background_dark.xml
│  │  │  │  │  │  │          │      abc_dialog_material_background_light.xml
│  │  │  │  │  │  │          │      abc_edit_text_material.xml
│  │  │  │  │  │  │          │      abc_item_background_holo_dark.xml
│  │  │  │  │  │  │          │      abc_item_background_holo_light.xml
│  │  │  │  │  │  │          │      abc_list_selector_background_transition_holo_dark.xml
│  │  │  │  │  │  │          │      abc_list_selector_background_transition_holo_light.xml
│  │  │  │  │  │  │          │      abc_list_selector_holo_dark.xml
│  │  │  │  │  │  │          │      abc_list_selector_holo_light.xml
│  │  │  │  │  │  │          │      abc_ratingbar_full_material.xml
│  │  │  │  │  │  │          │      abc_ratingbar_indicator_material.xml
│  │  │  │  │  │  │          │      abc_ratingbar_small_material.xml
│  │  │  │  │  │  │          │      abc_seekbar_thumb_material.xml
│  │  │  │  │  │  │          │      abc_seekbar_track_material.xml
│  │  │  │  │  │  │          │      abc_spinner_textfield_background_material.xml
│  │  │  │  │  │  │          │      abc_switch_thumb_material.xml
│  │  │  │  │  │  │          │      abc_tab_indicator_material.xml
│  │  │  │  │  │  │          │      abc_textfield_search_material.xml
│  │  │  │  │  │  │          │      abc_text_cursor_material.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-hdpi-v4
│  │  │  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-ldrtl-hdpi-v17
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-ldrtl-mdpi-v17
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-ldrtl-xhdpi-v17
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-ldrtl-xxhdpi-v17
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-ldrtl-xxxhdpi-v17
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-mdpi-v4
│  │  │  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-v21
│  │  │  │  │  │  │          │      abc_action_bar_item_background_material.xml
│  │  │  │  │  │  │          │      abc_btn_colored_material.xml
│  │  │  │  │  │  │          │      abc_edit_text_material.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-v23
│  │  │  │  │  │  │          │      abc_control_background_material.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-xhdpi-v4
│  │  │  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-xxhdpi-v4
│  │  │  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─drawable-xxxhdpi-v4
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─layout
│  │  │  │  │  │  │          │      abc_action_bar_title_item.xml
│  │  │  │  │  │  │          │      abc_action_bar_up_container.xml
│  │  │  │  │  │  │          │      abc_action_bar_view_list_nav_layout.xml
│  │  │  │  │  │  │          │      abc_action_menu_item_layout.xml
│  │  │  │  │  │  │          │      abc_action_menu_layout.xml
│  │  │  │  │  │  │          │      abc_action_mode_bar.xml
│  │  │  │  │  │  │          │      abc_action_mode_close_item_material.xml
│  │  │  │  │  │  │          │      abc_activity_chooser_view.xml
│  │  │  │  │  │  │          │      abc_activity_chooser_view_list_item.xml
│  │  │  │  │  │  │          │      abc_alert_dialog_button_bar_material.xml
│  │  │  │  │  │  │          │      abc_alert_dialog_material.xml
│  │  │  │  │  │  │          │      abc_dialog_title_material.xml
│  │  │  │  │  │  │          │      abc_expanded_menu_layout.xml
│  │  │  │  │  │  │          │      abc_list_menu_item_checkbox.xml
│  │  │  │  │  │  │          │      abc_list_menu_item_icon.xml
│  │  │  │  │  │  │          │      abc_list_menu_item_layout.xml
│  │  │  │  │  │  │          │      abc_list_menu_item_radio.xml
│  │  │  │  │  │  │          │      abc_popup_menu_item_layout.xml
│  │  │  │  │  │  │          │      abc_screen_content_include.xml
│  │  │  │  │  │  │          │      abc_screen_simple.xml
│  │  │  │  │  │  │          │      abc_screen_simple_overlay_action_mode.xml
│  │  │  │  │  │  │          │      abc_screen_toolbar.xml
│  │  │  │  │  │  │          │      abc_search_dropdown_item_icons_2line.xml
│  │  │  │  │  │  │          │      abc_search_view.xml
│  │  │  │  │  │  │          │      abc_select_dialog_material.xml
│  │  │  │  │  │  │          │      notification_media_action.xml
│  │  │  │  │  │  │          │      notification_media_cancel_action.xml
│  │  │  │  │  │  │          │      notification_template_big_media.xml
│  │  │  │  │  │  │          │      notification_template_big_media_narrow.xml
│  │  │  │  │  │  │          │      notification_template_lines.xml
│  │  │  │  │  │  │          │      notification_template_media.xml
│  │  │  │  │  │  │          │      notification_template_part_chronometer.xml
│  │  │  │  │  │  │          │      notification_template_part_time.xml
│  │  │  │  │  │  │          │      select_dialog_item_material.xml
│  │  │  │  │  │  │          │      select_dialog_multichoice_material.xml
│  │  │  │  │  │  │          │      select_dialog_singlechoice_material.xml
│  │  │  │  │  │  │          │      support_simple_spinner_dropdown_item.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values
│  │  │  │  │  │  │          │      values.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-af
│  │  │  │  │  │  │          │      values-af.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-am
│  │  │  │  │  │  │          │      values-am.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ar
│  │  │  │  │  │  │          │      values-ar.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-az-rAZ
│  │  │  │  │  │  │          │      values-az-rAZ.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-bg
│  │  │  │  │  │  │          │      values-bg.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-bn-rBD
│  │  │  │  │  │  │          │      values-bn-rBD.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ca
│  │  │  │  │  │  │          │      values-ca.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-cs
│  │  │  │  │  │  │          │      values-cs.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-da
│  │  │  │  │  │  │          │      values-da.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-de
│  │  │  │  │  │  │          │      values-de.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-el
│  │  │  │  │  │  │          │      values-el.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-en-rAU
│  │  │  │  │  │  │          │      values-en-rAU.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-en-rGB
│  │  │  │  │  │  │          │      values-en-rGB.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-en-rIN
│  │  │  │  │  │  │          │      values-en-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-es
│  │  │  │  │  │  │          │      values-es.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-es-rUS
│  │  │  │  │  │  │          │      values-es-rUS.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-et-rEE
│  │  │  │  │  │  │          │      values-et-rEE.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-eu-rES
│  │  │  │  │  │  │          │      values-eu-rES.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-fa
│  │  │  │  │  │  │          │      values-fa.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-fi
│  │  │  │  │  │  │          │      values-fi.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-fr
│  │  │  │  │  │  │          │      values-fr.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-fr-rCA
│  │  │  │  │  │  │          │      values-fr-rCA.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-gl-rES
│  │  │  │  │  │  │          │      values-gl-rES.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-gu-rIN
│  │  │  │  │  │  │          │      values-gu-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-h320dp-v13
│  │  │  │  │  │  │          │      values-h320dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-h720dp-v13
│  │  │  │  │  │  │          │      values-h720dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-hdpi-v4
│  │  │  │  │  │  │          │      values-hdpi-v4.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-hi
│  │  │  │  │  │  │          │      values-hi.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-hr
│  │  │  │  │  │  │          │      values-hr.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-hu
│  │  │  │  │  │  │          │      values-hu.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-hy-rAM
│  │  │  │  │  │  │          │      values-hy-rAM.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-in
│  │  │  │  │  │  │          │      values-in.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-is-rIS
│  │  │  │  │  │  │          │      values-is-rIS.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-it
│  │  │  │  │  │  │          │      values-it.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-iw
│  │  │  │  │  │  │          │      values-iw.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ja
│  │  │  │  │  │  │          │      values-ja.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ka-rGE
│  │  │  │  │  │  │          │      values-ka-rGE.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-kk-rKZ
│  │  │  │  │  │  │          │      values-kk-rKZ.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-km-rKH
│  │  │  │  │  │  │          │      values-km-rKH.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-kn-rIN
│  │  │  │  │  │  │          │      values-kn-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ko
│  │  │  │  │  │  │          │      values-ko.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ky-rKG
│  │  │  │  │  │  │          │      values-ky-rKG.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-land
│  │  │  │  │  │  │          │      values-land.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-large-v4
│  │  │  │  │  │  │          │      values-large-v4.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ldltr-v21
│  │  │  │  │  │  │          │      values-ldltr-v21.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-lo-rLA
│  │  │  │  │  │  │          │      values-lo-rLA.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-lt
│  │  │  │  │  │  │          │      values-lt.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-lv
│  │  │  │  │  │  │          │      values-lv.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-mk-rMK
│  │  │  │  │  │  │          │      values-mk-rMK.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ml-rIN
│  │  │  │  │  │  │          │      values-ml-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-mn-rMN
│  │  │  │  │  │  │          │      values-mn-rMN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-mr-rIN
│  │  │  │  │  │  │          │      values-mr-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ms-rMY
│  │  │  │  │  │  │          │      values-ms-rMY.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-my-rMM
│  │  │  │  │  │  │          │      values-my-rMM.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-nb
│  │  │  │  │  │  │          │      values-nb.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ne-rNP
│  │  │  │  │  │  │          │      values-ne-rNP.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-night-v8
│  │  │  │  │  │  │          │      values-night-v8.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-nl
│  │  │  │  │  │  │          │      values-nl.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-pa-rIN
│  │  │  │  │  │  │          │      values-pa-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-pl
│  │  │  │  │  │  │          │      values-pl.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-port
│  │  │  │  │  │  │          │      values-port.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-pt
│  │  │  │  │  │  │          │      values-pt.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-pt-rBR
│  │  │  │  │  │  │          │      values-pt-rBR.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-pt-rPT
│  │  │  │  │  │  │          │      values-pt-rPT.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ro
│  │  │  │  │  │  │          │      values-ro.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ru
│  │  │  │  │  │  │          │      values-ru.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-si-rLK
│  │  │  │  │  │  │          │      values-si-rLK.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-sk
│  │  │  │  │  │  │          │      values-sk.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-sl
│  │  │  │  │  │  │          │      values-sl.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-sq-rAL
│  │  │  │  │  │  │          │      values-sq-rAL.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-sr
│  │  │  │  │  │  │          │      values-sr.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-sv
│  │  │  │  │  │  │          │      values-sv.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-sw
│  │  │  │  │  │  │          │      values-sw.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-sw600dp-v13
│  │  │  │  │  │  │          │      values-sw600dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ta-rIN
│  │  │  │  │  │  │          │      values-ta-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-te-rIN
│  │  │  │  │  │  │          │      values-te-rIN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-th
│  │  │  │  │  │  │          │      values-th.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-tl
│  │  │  │  │  │  │          │      values-tl.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-tr
│  │  │  │  │  │  │          │      values-tr.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-uk
│  │  │  │  │  │  │          │      values-uk.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-ur-rPK
│  │  │  │  │  │  │          │      values-ur-rPK.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-uz-rUZ
│  │  │  │  │  │  │          │      values-uz-rUZ.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v11
│  │  │  │  │  │  │          │      values-v11.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v12
│  │  │  │  │  │  │          │      values-v12.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v13
│  │  │  │  │  │  │          │      values-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v14
│  │  │  │  │  │  │          │      values-v14.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v17
│  │  │  │  │  │  │          │      values-v17.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v18
│  │  │  │  │  │  │          │      values-v18.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v21
│  │  │  │  │  │  │          │      values-v21.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v22
│  │  │  │  │  │  │          │      values-v22.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-v23
│  │  │  │  │  │  │          │      values-v23.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-vi
│  │  │  │  │  │  │          │      values-vi.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-w360dp-v13
│  │  │  │  │  │  │          │      values-w360dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-w480dp-v13
│  │  │  │  │  │  │          │      values-w480dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-w500dp-v13
│  │  │  │  │  │  │          │      values-w500dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-w600dp-v13
│  │  │  │  │  │  │          │      values-w600dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-w720dp-v13
│  │  │  │  │  │  │          │      values-w720dp-v13.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-xlarge-land-v4
│  │  │  │  │  │  │          │      values-xlarge-land-v4.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-xlarge-v4
│  │  │  │  │  │  │          │      values-xlarge-v4.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-zh-rCN
│  │  │  │  │  │  │          │      values-zh-rCN.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-zh-rHK
│  │  │  │  │  │  │          │      values-zh-rHK.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          ├─values-zh-rTW
│  │  │  │  │  │  │          │      values-zh-rTW.xml
│  │  │  │  │  │  │          │      
│  │  │  │  │  │  │          └─values-zu
│  │  │  │  │  │  │                  values-zu.xml
│  │  │  │  │  │  │                  
│  │  │  │  │  │  ├─support-v4
│  │  │  │  │  │  │  └─23.4.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  annotations.zip
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aapt
│  │  │  │  │  │  │      │      AndroidManifest.xml
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      │  └─android
│  │  │  │  │  │  │      │      └─support
│  │  │  │  │  │  │      │          └─v4
│  │  │  │  │  │  │      │              ├─media
│  │  │  │  │  │  │      │              │  │  MediaMetadataCompat.aidl
│  │  │  │  │  │  │      │              │  │  RatingCompat.aidl
│  │  │  │  │  │  │      │              │  │  
│  │  │  │  │  │  │      │              │  └─session
│  │  │  │  │  │  │      │              │          MediaSessionCompat.aidl
│  │  │  │  │  │  │      │              │          ParcelableVolumeInfo.aidl
│  │  │  │  │  │  │      │              │          PlaybackStateCompat.aidl
│  │  │  │  │  │  │      │              │          
│  │  │  │  │  │  │      │              └─os
│  │  │  │  │  │  │      │                      ResultReceiver.aidl
│  │  │  │  │  │  │      │                      
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │  │  classes.jar
│  │  │  │  │  │  │      │  │  
│  │  │  │  │  │  │      │  └─libs
│  │  │  │  │  │  │      │          internal_impl-23.4.0.jar
│  │  │  │  │  │  │      │          
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  └─support-vector-drawable
│  │  │  │  │  │      └─23.4.0
│  │  │  │  │  │          │  AndroidManifest.xml
│  │  │  │  │  │          │  
│  │  │  │  │  │          ├─aapt
│  │  │  │  │  │          │      AndroidManifest.xml
│  │  │  │  │  │          │      
│  │  │  │  │  │          ├─aidl
│  │  │  │  │  │          ├─assets
│  │  │  │  │  │          ├─jars
│  │  │  │  │  │          │      classes.jar
│  │  │  │  │  │          │      
│  │  │  │  │  │          ├─jni
│  │  │  │  │  │          ├─libs
│  │  │  │  │  │          └─res
│  │  │  │  │  ├─com.facebook.fbui.textlayoutbuilder
│  │  │  │  │  │  └─textlayoutbuilder
│  │  │  │  │  │      └─1.0.0
│  │  │  │  │  │          │  AndroidManifest.xml
│  │  │  │  │  │          │  annotations.zip
│  │  │  │  │  │          │  R.txt
│  │  │  │  │  │          │  
│  │  │  │  │  │          ├─aapt
│  │  │  │  │  │          │      AndroidManifest.xml
│  │  │  │  │  │          │      
│  │  │  │  │  │          ├─aidl
│  │  │  │  │  │          ├─assets
│  │  │  │  │  │          ├─jars
│  │  │  │  │  │          │      classes.jar
│  │  │  │  │  │          │      
│  │  │  │  │  │          ├─jni
│  │  │  │  │  │          ├─libs
│  │  │  │  │  │          └─res
│  │  │  │  │  │              └─values
│  │  │  │  │  │                      values.xml
│  │  │  │  │  │                      
│  │  │  │  │  ├─com.facebook.fresco
│  │  │  │  │  │  ├─drawee
│  │  │  │  │  │  │  └─1.3.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  R.txt
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │      classes.jar
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  │          └─values
│  │  │  │  │  │  │                  values.xml
│  │  │  │  │  │  │                  
│  │  │  │  │  │  ├─fbcore
│  │  │  │  │  │  │  └─1.3.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  annotations.zip
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │      classes.jar
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  ├─fresco
│  │  │  │  │  │  │  └─1.3.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  R.txt
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │      classes.jar
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  ├─imagepipeline
│  │  │  │  │  │  │  └─1.3.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  annotations.zip
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │      classes.jar
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      │  ├─arm64-v8a
│  │  │  │  │  │  │      │  │      libimagepipeline.so
│  │  │  │  │  │  │      │  │      
│  │  │  │  │  │  │      │  ├─armeabi
│  │  │  │  │  │  │      │  │      libimagepipeline.so
│  │  │  │  │  │  │      │  │      
│  │  │  │  │  │  │      │  ├─armeabi-v7a
│  │  │  │  │  │  │      │  │      libimagepipeline.so
│  │  │  │  │  │  │      │  │      
│  │  │  │  │  │  │      │  ├─x86
│  │  │  │  │  │  │      │  │      libimagepipeline.so
│  │  │  │  │  │  │      │  │      
│  │  │  │  │  │  │      │  └─x86_64
│  │  │  │  │  │  │      │          libimagepipeline.so
│  │  │  │  │  │  │      │          
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  ├─imagepipeline-base
│  │  │  │  │  │  │  └─1.3.0
│  │  │  │  │  │  │      │  AndroidManifest.xml
│  │  │  │  │  │  │      │  annotations.zip
│  │  │  │  │  │  │      │  
│  │  │  │  │  │  │      ├─aidl
│  │  │  │  │  │  │      ├─assets
│  │  │  │  │  │  │      ├─jars
│  │  │  │  │  │  │      │      classes.jar
│  │  │  │  │  │  │      │      
│  │  │  │  │  │  │      ├─jni
│  │  │  │  │  │  │      ├─libs
│  │  │  │  │  │  │      └─res
│  │  │  │  │  │  └─imagepipeline-okhttp3
│  │  │  │  │  │      └─1.3.0
│  │  │  │  │  │          │  AndroidManifest.xml
│  │  │  │  │  │          │  
│  │  │  │  │  │          ├─aidl
│  │  │  │  │  │          ├─assets
│  │  │  │  │  │          ├─jars
│  │  │  │  │  │          │      classes.jar
│  │  │  │  │  │          │      
│  │  │  │  │  │          ├─jni
│  │  │  │  │  │          ├─libs
│  │  │  │  │  │          └─res
│  │  │  │  │  ├─com.facebook.react
│  │  │  │  │  │  └─react-native
│  │  │  │  │  │      └─0.55.4
│  │  │  │  │  │          │  AndroidManifest.xml
│  │  │  │  │  │          │  annotations.zip
│  │  │  │  │  │          │  R.txt
│  │  │  │  │  │          │  
│  │  │  │  │  │          ├─aidl
│  │  │  │  │  │          ├─assets
│  │  │  │  │  │          ├─jars
│  │  │  │  │  │          │  │  classes.jar
│  │  │  │  │  │          │  │  
│  │  │  │  │  │          │  └─libs
│  │  │  │  │  │          │          infer-annotations-4.0.jar
│  │  │  │  │  │          │          
│  │  │  │  │  │          ├─jni
│  │  │  │  │  │          │  ├─armeabi-v7a
│  │  │  │  │  │          │  │      libfb.so
│  │  │  │  │  │          │  │      libfolly_json.so
│  │  │  │  │  │          │  │      libglog.so
│  │  │  │  │  │          │  │      libglog_init.so
│  │  │  │  │  │          │  │      libgnustl_shared.so
│  │  │  │  │  │          │  │      libprivatedata.so
│  │  │  │  │  │          │  │      libreactnativejni.so
│  │  │  │  │  │          │  │      libyoga.so
│  │  │  │  │  │          │  │      
│  │  │  │  │  │          │  └─x86
│  │  │  │  │  │          │          libfb.so
│  │  │  │  │  │          │          libfolly_json.so
│  │  │  │  │  │          │          libglog.so
│  │  │  │  │  │          │          libglog_init.so
│  │  │  │  │  │          │          libgnustl_shared.so
│  │  │  │  │  │          │          libprivatedata.so
│  │  │  │  │  │          │          libreactnativejni.so
│  │  │  │  │  │          │          libyoga.so
│  │  │  │  │  │          │          
│  │  │  │  │  │          ├─libs
│  │  │  │  │  │          └─res
│  │  │  │  │  │              ├─anim
│  │  │  │  │  │              │      catalyst_fade_in.xml
│  │  │  │  │  │              │      catalyst_fade_out.xml
│  │  │  │  │  │              │      catalyst_push_up_in.xml
│  │  │  │  │  │              │      catalyst_push_up_out.xml
│  │  │  │  │  │              │      catalyst_slide_down.xml
│  │  │  │  │  │              │      catalyst_slide_up.xml
│  │  │  │  │  │              │      
│  │  │  │  │  │              ├─layout
│  │  │  │  │  │              │      dev_loading_view.xml
│  │  │  │  │  │              │      fps_view.xml
│  │  │  │  │  │              │      redbox_item_frame.xml
│  │  │  │  │  │              │      redbox_item_title.xml
│  │  │  │  │  │              │      redbox_view.xml
│  │  │  │  │  │              │      
│  │  │  │  │  │              ├─values
│  │  │  │  │  │              │      values.xml
│  │  │  │  │  │              │      
│  │  │  │  │  │              └─xml
│  │  │  │  │  │                      preferences.xml
│  │  │  │  │  │                      
│  │  │  │  │  ├─com.facebook.soloader
│  │  │  │  │  │  └─soloader
│  │  │  │  │  │      └─0.1.0
│  │  │  │  │  │          │  AndroidManifest.xml
│  │  │  │  │  │          │  R.txt
│  │  │  │  │  │          │  
│  │  │  │  │  │          ├─assets
│  │  │  │  │  │          ├─jars
│  │  │  │  │  │          │      classes.jar
│  │  │  │  │  │          │      
│  │  │  │  │  │          └─res
│  │  │  │  │  └─org.webkit
│  │  │  │  │      └─android-jsc
│  │  │  │  │          └─r174650
│  │  │  │  │              │  AndroidManifest.xml
│  │  │  │  │              │  R.txt
│  │  │  │  │              │  
│  │  │  │  │              ├─assets
│  │  │  │  │              ├─jars
│  │  │  │  │              │      classes.jar
│  │  │  │  │              │      
│  │  │  │  │              ├─jni
│  │  │  │  │              │  ├─armeabi
│  │  │  │  │              │  │      libicu_common.so
│  │  │  │  │              │  │      
│  │  │  │  │              │  ├─armeabi-v7a
│  │  │  │  │              │  │      libicu_common.so
│  │  │  │  │              │  │      libjsc.so
│  │  │  │  │              │  │      
│  │  │  │  │              │  └─x86
│  │  │  │  │              │          libicu_common.so
│  │  │  │  │              │          libjsc.so
│  │  │  │  │              │          
│  │  │  │  │              └─res
│  │  │  │  ├─incremental
│  │  │  │  │  ├─compileDebugAidl
│  │  │  │  │  │      dependency.store
│  │  │  │  │  │      
│  │  │  │  │  ├─mergeDebugAssets
│  │  │  │  │  │      merger.xml
│  │  │  │  │  │      
│  │  │  │  │  ├─mergeDebugJniLibFolders
│  │  │  │  │  │      merger.xml
│  │  │  │  │  │      
│  │  │  │  │  ├─mergeDebugResources
│  │  │  │  │  │  │  compile-file-map.properties
│  │  │  │  │  │  │  merger.xml
│  │  │  │  │  │  │  
│  │  │  │  │  │  ├─aapt-temp
│  │  │  │  │  │  └─merged.dir
│  │  │  │  │  │      ├─values
│  │  │  │  │  │      │      values.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-af
│  │  │  │  │  │      │      values-af.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-am
│  │  │  │  │  │      │      values-am.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ar
│  │  │  │  │  │      │      values-ar.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-az-rAZ
│  │  │  │  │  │      │      values-az-rAZ.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-bg
│  │  │  │  │  │      │      values-bg.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-bn-rBD
│  │  │  │  │  │      │      values-bn-rBD.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ca
│  │  │  │  │  │      │      values-ca.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-cs
│  │  │  │  │  │      │      values-cs.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-da
│  │  │  │  │  │      │      values-da.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-de
│  │  │  │  │  │      │      values-de.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-el
│  │  │  │  │  │      │      values-el.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-en-rAU
│  │  │  │  │  │      │      values-en-rAU.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-en-rGB
│  │  │  │  │  │      │      values-en-rGB.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-en-rIN
│  │  │  │  │  │      │      values-en-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-es
│  │  │  │  │  │      │      values-es.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-es-rUS
│  │  │  │  │  │      │      values-es-rUS.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-et-rEE
│  │  │  │  │  │      │      values-et-rEE.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-eu-rES
│  │  │  │  │  │      │      values-eu-rES.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-fa
│  │  │  │  │  │      │      values-fa.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-fi
│  │  │  │  │  │      │      values-fi.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-fr
│  │  │  │  │  │      │      values-fr.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-fr-rCA
│  │  │  │  │  │      │      values-fr-rCA.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-gl-rES
│  │  │  │  │  │      │      values-gl-rES.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-gu-rIN
│  │  │  │  │  │      │      values-gu-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-h320dp-v13
│  │  │  │  │  │      │      values-h320dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-h720dp-v13
│  │  │  │  │  │      │      values-h720dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-hdpi-v4
│  │  │  │  │  │      │      values-hdpi-v4.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-hi
│  │  │  │  │  │      │      values-hi.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-hr
│  │  │  │  │  │      │      values-hr.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-hu
│  │  │  │  │  │      │      values-hu.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-hy-rAM
│  │  │  │  │  │      │      values-hy-rAM.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-in
│  │  │  │  │  │      │      values-in.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-is-rIS
│  │  │  │  │  │      │      values-is-rIS.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-it
│  │  │  │  │  │      │      values-it.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-iw
│  │  │  │  │  │      │      values-iw.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ja
│  │  │  │  │  │      │      values-ja.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ka-rGE
│  │  │  │  │  │      │      values-ka-rGE.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-kk-rKZ
│  │  │  │  │  │      │      values-kk-rKZ.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-km-rKH
│  │  │  │  │  │      │      values-km-rKH.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-kn-rIN
│  │  │  │  │  │      │      values-kn-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ko
│  │  │  │  │  │      │      values-ko.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ky-rKG
│  │  │  │  │  │      │      values-ky-rKG.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-land
│  │  │  │  │  │      │      values-land.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-large-v4
│  │  │  │  │  │      │      values-large-v4.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ldltr-v21
│  │  │  │  │  │      │      values-ldltr-v21.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-lo-rLA
│  │  │  │  │  │      │      values-lo-rLA.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-lt
│  │  │  │  │  │      │      values-lt.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-lv
│  │  │  │  │  │      │      values-lv.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-mk-rMK
│  │  │  │  │  │      │      values-mk-rMK.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ml-rIN
│  │  │  │  │  │      │      values-ml-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-mn-rMN
│  │  │  │  │  │      │      values-mn-rMN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-mr-rIN
│  │  │  │  │  │      │      values-mr-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ms-rMY
│  │  │  │  │  │      │      values-ms-rMY.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-my-rMM
│  │  │  │  │  │      │      values-my-rMM.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-nb
│  │  │  │  │  │      │      values-nb.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ne-rNP
│  │  │  │  │  │      │      values-ne-rNP.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-night-v8
│  │  │  │  │  │      │      values-night-v8.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-nl
│  │  │  │  │  │      │      values-nl.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-pa-rIN
│  │  │  │  │  │      │      values-pa-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-pl
│  │  │  │  │  │      │      values-pl.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-port
│  │  │  │  │  │      │      values-port.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-pt
│  │  │  │  │  │      │      values-pt.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-pt-rBR
│  │  │  │  │  │      │      values-pt-rBR.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-pt-rPT
│  │  │  │  │  │      │      values-pt-rPT.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ro
│  │  │  │  │  │      │      values-ro.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ru
│  │  │  │  │  │      │      values-ru.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-si-rLK
│  │  │  │  │  │      │      values-si-rLK.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-sk
│  │  │  │  │  │      │      values-sk.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-sl
│  │  │  │  │  │      │      values-sl.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-sq-rAL
│  │  │  │  │  │      │      values-sq-rAL.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-sr
│  │  │  │  │  │      │      values-sr.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-sv
│  │  │  │  │  │      │      values-sv.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-sw
│  │  │  │  │  │      │      values-sw.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-sw600dp-v13
│  │  │  │  │  │      │      values-sw600dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ta-rIN
│  │  │  │  │  │      │      values-ta-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-te-rIN
│  │  │  │  │  │      │      values-te-rIN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-th
│  │  │  │  │  │      │      values-th.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-tl
│  │  │  │  │  │      │      values-tl.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-tr
│  │  │  │  │  │      │      values-tr.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-uk
│  │  │  │  │  │      │      values-uk.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-ur-rPK
│  │  │  │  │  │      │      values-ur-rPK.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-uz-rUZ
│  │  │  │  │  │      │      values-uz-rUZ.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v11
│  │  │  │  │  │      │      values-v11.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v12
│  │  │  │  │  │      │      values-v12.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v13
│  │  │  │  │  │      │      values-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v14
│  │  │  │  │  │      │      values-v14.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v17
│  │  │  │  │  │      │      values-v17.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v18
│  │  │  │  │  │      │      values-v18.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v21
│  │  │  │  │  │      │      values-v21.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v22
│  │  │  │  │  │      │      values-v22.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-v23
│  │  │  │  │  │      │      values-v23.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-vi
│  │  │  │  │  │      │      values-vi.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-w360dp-v13
│  │  │  │  │  │      │      values-w360dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-w480dp-v13
│  │  │  │  │  │      │      values-w480dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-w500dp-v13
│  │  │  │  │  │      │      values-w500dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-w600dp-v13
│  │  │  │  │  │      │      values-w600dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-w720dp-v13
│  │  │  │  │  │      │      values-w720dp-v13.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-xlarge-land-v4
│  │  │  │  │  │      │      values-xlarge-land-v4.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-xlarge-v4
│  │  │  │  │  │      │      values-xlarge-v4.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-zh-rCN
│  │  │  │  │  │      │      values-zh-rCN.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-zh-rHK
│  │  │  │  │  │      │      values-zh-rHK.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      ├─values-zh-rTW
│  │  │  │  │  │      │      values-zh-rTW.xml
│  │  │  │  │  │      │      
│  │  │  │  │  │      └─values-zu
│  │  │  │  │  │              values-zu.xml
│  │  │  │  │  │              
│  │  │  │  │  ├─mergeDebugShaders
│  │  │  │  │  │      merger.xml
│  │  │  │  │  │      
│  │  │  │  │  ├─packageDebug
│  │  │  │  │  │  │  dex-renamer-state.txt
│  │  │  │  │  │  │  file-input-save-data.txt
│  │  │  │  │  │  │  
│  │  │  │  │  │  └─zip-cache
│  │  │  │  │  │          Q6C+bXDNem3xSsmJoE_++JQ_JTY=
│  │  │  │  │  │          
│  │  │  │  │  ├─packageDebugAndroidTest
│  │  │  │  │  │  └─zip-cache
│  │  │  │  │  ├─packageRelease
│  │  │  │  │  │  └─zip-cache
│  │  │  │  │  └─processDebugResources
│  │  │  │  │      └─aapt-temp
│  │  │  │  ├─incremental-safeguard
│  │  │  │  │  └─debug
│  │  │  │  │          tag.txt
│  │  │  │  │          
│  │  │  │  ├─jniLibs
│  │  │  │  │  └─debug
│  │  │  │  ├─manifests
│  │  │  │  │  ├─full
│  │  │  │  │  │  └─debug
│  │  │  │  │  │          AndroidManifest.xml
│  │  │  │  │  │          
│  │  │  │  │  └─instant-run
│  │  │  │  │      └─debug
│  │  │  │  ├─pre-dexed
│  │  │  │  │  └─debug
│  │  │  │  │          app-react-native-splash-screen-unspecified_83d2cb2f36b2b260bfbdc1b90489a7e85eabaea7.jar
│  │  │  │  │          bolts-tasks-1.4.0_b86eae77a1e09112bae81fa878e68ae3f038dd36.jar
│  │  │  │  │          com.android.support-animated-vector-drawable-23.4.0_445f2b834ea473651d579366c20e98e6b2eb83e7.jar
│  │  │  │  │          com.android.support-appcompat-v7-23.4.0_a4a82a00c6fcf470447c0f7115ae30d8134d11e8.jar
│  │  │  │  │          com.android.support-support-v4-23.4.0_5e17063b678dfd59bd08963f769a8e0331b36adf.jar
│  │  │  │  │          com.android.support-support-vector-drawable-23.4.0_b1f2968940f26b7d29a169ce602d1bcf843437d0.jar
│  │  │  │  │          com.facebook.fbui.textlayoutbuilder-textlayoutbuilder-1.0.0_12e9a12b21fd4522174828363862f9cd1c202103.jar
│  │  │  │  │          com.facebook.fresco-drawee-1.3.0_19cb2fe8bf31b351bba2e314505f21ba132d3f78.jar
│  │  │  │  │          com.facebook.fresco-fbcore-1.3.0_92fb32e07f81ae995ee98285f00bacadafb30d9f.jar
│  │  │  │  │          com.facebook.fresco-fresco-1.3.0_45662281fd53155c46f35a66b69ec5d720e7e2ba.jar
│  │  │  │  │          com.facebook.fresco-imagepipeline-1.3.0_347594a78296d9a2a20c25e718d4fd526602d09c.jar
│  │  │  │  │          com.facebook.fresco-imagepipeline-base-1.3.0_90625b5733903ba58a3374d389d3c78443cfb847.jar
│  │  │  │  │          com.facebook.fresco-imagepipeline-okhttp3-1.3.0_adb557a0a63c5d56195e47b114d91f5a303f1c12.jar
│  │  │  │  │          com.facebook.react-react-native-0.55.4_d5a477a7171433c0e01dafa0c4a7a987ce29e81c.jar
│  │  │  │  │          com.facebook.soloader-soloader-0.1.0_2c7c6fd49e94a2b3a287a4e5eebd0b60f3afb39e.jar
│  │  │  │  │          debug_634d72e69488ddf44d57ef0435a58271dd0224b5.jar
│  │  │  │  │          infer-annotations-4.0_e3ab168f95ea21c46d611854a5dbf9576fc1cabf.jar
│  │  │  │  │          internal_impl-23.4.0_4b4f25c58a02696646c20db305d6b382eec0c086.jar
│  │  │  │  │          javax.inject-1_fb32d109f2792da9296dfcc81eedcae90e48875c.jar
│  │  │  │  │          jsr305-3.0.0_9b2c7014de6c8af4cb03d6c7993e690bf422eaec.jar
│  │  │  │  │          okhttp-3.6.0_546bfc761620637763fb944c52966cbc8d4ad4dd.jar
│  │  │  │  │          okhttp-urlconnection-3.6.0_3983b626f68a722d4631e5d8389c9ec1e5a58e09.jar
│  │  │  │  │          okio-1.13.0_43a4003f7d8d7d43eefb0dfa2b349941a6d04a71.jar
│  │  │  │  │          staticlayout-proxy-1.0_fe805da668d53784feed43b9b0efaa713f11ee73.jar
│  │  │  │  │          support-annotations-23.4.0_4b0dd90648c337e4223eaf5901c00b7ce9fe5c7b.jar
│  │  │  │  │          
│  │  │  │  ├─res
│  │  │  │  │  │  resources-debug.ap_
│  │  │  │  │  │  
│  │  │  │  │  └─merged
│  │  │  │  │      └─debug
│  │  │  │  │          ├─anim
│  │  │  │  │          │      abc_fade_in.xml
│  │  │  │  │          │      abc_fade_out.xml
│  │  │  │  │          │      abc_grow_fade_in_from_bottom.xml
│  │  │  │  │          │      abc_popup_enter.xml
│  │  │  │  │          │      abc_popup_exit.xml
│  │  │  │  │          │      abc_shrink_fade_out_from_bottom.xml
│  │  │  │  │          │      abc_slide_in_bottom.xml
│  │  │  │  │          │      abc_slide_in_top.xml
│  │  │  │  │          │      abc_slide_out_bottom.xml
│  │  │  │  │          │      abc_slide_out_top.xml
│  │  │  │  │          │      catalyst_fade_in.xml
│  │  │  │  │          │      catalyst_fade_out.xml
│  │  │  │  │          │      catalyst_push_up_in.xml
│  │  │  │  │          │      catalyst_push_up_out.xml
│  │  │  │  │          │      catalyst_slide_down.xml
│  │  │  │  │          │      catalyst_slide_up.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─color
│  │  │  │  │          │      abc_primary_text_disable_only_material_dark.xml
│  │  │  │  │          │      abc_primary_text_disable_only_material_light.xml
│  │  │  │  │          │      abc_primary_text_material_dark.xml
│  │  │  │  │          │      abc_primary_text_material_light.xml
│  │  │  │  │          │      abc_search_url_text.xml
│  │  │  │  │          │      abc_secondary_text_material_dark.xml
│  │  │  │  │          │      abc_secondary_text_material_light.xml
│  │  │  │  │          │      switch_thumb_material_dark.xml
│  │  │  │  │          │      switch_thumb_material_light.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─color-v11
│  │  │  │  │          │      abc_background_cache_hint_selector_material_dark.xml
│  │  │  │  │          │      abc_background_cache_hint_selector_material_light.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─color-v23
│  │  │  │  │          │      abc_color_highlight_material.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable
│  │  │  │  │          │      abc_btn_borderless_material.xml
│  │  │  │  │          │      abc_btn_check_material.xml
│  │  │  │  │          │      abc_btn_colored_material.xml
│  │  │  │  │          │      abc_btn_default_mtrl_shape.xml
│  │  │  │  │          │      abc_btn_radio_material.xml
│  │  │  │  │          │      abc_cab_background_internal_bg.xml
│  │  │  │  │          │      abc_cab_background_top_material.xml
│  │  │  │  │          │      abc_dialog_material_background_dark.xml
│  │  │  │  │          │      abc_dialog_material_background_light.xml
│  │  │  │  │          │      abc_edit_text_material.xml
│  │  │  │  │          │      abc_item_background_holo_dark.xml
│  │  │  │  │          │      abc_item_background_holo_light.xml
│  │  │  │  │          │      abc_list_selector_background_transition_holo_dark.xml
│  │  │  │  │          │      abc_list_selector_background_transition_holo_light.xml
│  │  │  │  │          │      abc_list_selector_holo_dark.xml
│  │  │  │  │          │      abc_list_selector_holo_light.xml
│  │  │  │  │          │      abc_ratingbar_full_material.xml
│  │  │  │  │          │      abc_ratingbar_indicator_material.xml
│  │  │  │  │          │      abc_ratingbar_small_material.xml
│  │  │  │  │          │      abc_seekbar_thumb_material.xml
│  │  │  │  │          │      abc_seekbar_track_material.xml
│  │  │  │  │          │      abc_spinner_textfield_background_material.xml
│  │  │  │  │          │      abc_switch_thumb_material.xml
│  │  │  │  │          │      abc_tab_indicator_material.xml
│  │  │  │  │          │      abc_textfield_search_material.xml
│  │  │  │  │          │      abc_text_cursor_material.xml
│  │  │  │  │          │      launch_screen.jpg
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-hdpi-v4
│  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-ldrtl-hdpi-v17
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-ldrtl-mdpi-v17
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-ldrtl-xhdpi-v17
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-ldrtl-xxhdpi-v17
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-ldrtl-xxxhdpi-v17
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-mdpi-v4
│  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-v21
│  │  │  │  │          │      abc_action_bar_item_background_material.xml
│  │  │  │  │          │      abc_btn_colored_material.xml
│  │  │  │  │          │      abc_edit_text_material.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-v23
│  │  │  │  │          │      abc_control_background_material.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-xhdpi-v4
│  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-xxhdpi-v4
│  │  │  │  │          │      abc_ab_share_pack_mtrl_alpha.9.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_rating_star_off_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_rating_star_on_mtrl_alpha.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │          │      abc_cab_background_top_mtrl_alpha.9.png
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_commit_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_go_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_list_divider_mtrl_alpha.9.png
│  │  │  │  │          │      abc_list_focused_holo.9.png
│  │  │  │  │          │      abc_list_longpressed_holo.9.png
│  │  │  │  │          │      abc_list_pressed_holo_dark.9.png
│  │  │  │  │          │      abc_list_pressed_holo_light.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_dark.9.png
│  │  │  │  │          │      abc_list_selector_disabled_holo_light.9.png
│  │  │  │  │          │      abc_menu_hardkey_panel_mtrl_mult.9.png
│  │  │  │  │          │      abc_popup_background_mtrl_mult.9.png
│  │  │  │  │          │      abc_scrubber_control_off_mtrl_alpha.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │          │      abc_scrubber_primary_mtrl_alpha.9.png
│  │  │  │  │          │      abc_scrubber_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_default_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_activated_mtrl_alpha.9.png
│  │  │  │  │          │      abc_textfield_search_default_mtrl_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─drawable-xxxhdpi-v4
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_check_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_000.png
│  │  │  │  │          │      abc_btn_radio_to_on_mtrl_015.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00001.9.png
│  │  │  │  │          │      abc_btn_switch_to_on_mtrl_00012.9.png
│  │  │  │  │          │      abc_ic_ab_back_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_clear_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_copy_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_cut_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_moreoverflow_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_paste_mtrl_am_alpha.png
│  │  │  │  │          │      abc_ic_menu_selectall_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_menu_share_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_ic_star_black_16dp.png
│  │  │  │  │          │      abc_ic_star_black_36dp.png
│  │  │  │  │          │      abc_ic_star_half_black_16dp.png
│  │  │  │  │          │      abc_ic_star_half_black_36dp.png
│  │  │  │  │          │      abc_ic_voice_search_api_mtrl_alpha.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_000.png
│  │  │  │  │          │      abc_scrubber_control_to_pressed_mtrl_005.png
│  │  │  │  │          │      abc_spinner_mtrl_am_alpha.9.png
│  │  │  │  │          │      abc_switch_track_mtrl_alpha.9.png
│  │  │  │  │          │      abc_tab_indicator_mtrl_alpha.9.png
│  │  │  │  │          │      
│  │  │  │  │          ├─layout
│  │  │  │  │          │      abc_action_bar_title_item.xml
│  │  │  │  │          │      abc_action_bar_up_container.xml
│  │  │  │  │          │      abc_action_bar_view_list_nav_layout.xml
│  │  │  │  │          │      abc_action_menu_item_layout.xml
│  │  │  │  │          │      abc_action_menu_layout.xml
│  │  │  │  │          │      abc_action_mode_bar.xml
│  │  │  │  │          │      abc_action_mode_close_item_material.xml
│  │  │  │  │          │      abc_activity_chooser_view.xml
│  │  │  │  │          │      abc_activity_chooser_view_list_item.xml
│  │  │  │  │          │      abc_alert_dialog_button_bar_material.xml
│  │  │  │  │          │      abc_alert_dialog_material.xml
│  │  │  │  │          │      abc_dialog_title_material.xml
│  │  │  │  │          │      abc_expanded_menu_layout.xml
│  │  │  │  │          │      abc_list_menu_item_checkbox.xml
│  │  │  │  │          │      abc_list_menu_item_icon.xml
│  │  │  │  │          │      abc_list_menu_item_layout.xml
│  │  │  │  │          │      abc_list_menu_item_radio.xml
│  │  │  │  │          │      abc_popup_menu_item_layout.xml
│  │  │  │  │          │      abc_screen_content_include.xml
│  │  │  │  │          │      abc_screen_simple.xml
│  │  │  │  │          │      abc_screen_simple_overlay_action_mode.xml
│  │  │  │  │          │      abc_screen_toolbar.xml
│  │  │  │  │          │      abc_search_dropdown_item_icons_2line.xml
│  │  │  │  │          │      abc_search_view.xml
│  │  │  │  │          │      abc_select_dialog_material.xml
│  │  │  │  │          │      dev_loading_view.xml
│  │  │  │  │          │      fps_view.xml
│  │  │  │  │          │      launch_screen.xml
│  │  │  │  │          │      notification_media_action.xml
│  │  │  │  │          │      notification_media_cancel_action.xml
│  │  │  │  │          │      notification_template_big_media.xml
│  │  │  │  │          │      notification_template_big_media_narrow.xml
│  │  │  │  │          │      notification_template_lines.xml
│  │  │  │  │          │      notification_template_media.xml
│  │  │  │  │          │      notification_template_part_chronometer.xml
│  │  │  │  │          │      notification_template_part_time.xml
│  │  │  │  │          │      redbox_item_frame.xml
│  │  │  │  │          │      redbox_item_title.xml
│  │  │  │  │          │      redbox_view.xml
│  │  │  │  │          │      select_dialog_item_material.xml
│  │  │  │  │          │      select_dialog_multichoice_material.xml
│  │  │  │  │          │      select_dialog_singlechoice_material.xml
│  │  │  │  │          │      support_simple_spinner_dropdown_item.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─mipmap-hdpi
│  │  │  │  │          │      ic_launcher.png
│  │  │  │  │          │      
│  │  │  │  │          ├─mipmap-mdpi
│  │  │  │  │          │      ic_launcher.png
│  │  │  │  │          │      
│  │  │  │  │          ├─mipmap-xhdpi
│  │  │  │  │          │      ic_launcher.png
│  │  │  │  │          │      
│  │  │  │  │          ├─mipmap-xxhdpi
│  │  │  │  │          │      ic_launcher.png
│  │  │  │  │          │      
│  │  │  │  │          ├─values
│  │  │  │  │          │      values.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-af
│  │  │  │  │          │      values-af.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-am
│  │  │  │  │          │      values-am.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ar
│  │  │  │  │          │      values-ar.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-az-rAZ
│  │  │  │  │          │      values-az-rAZ.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-bg
│  │  │  │  │          │      values-bg.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-bn-rBD
│  │  │  │  │          │      values-bn-rBD.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ca
│  │  │  │  │          │      values-ca.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-cs
│  │  │  │  │          │      values-cs.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-da
│  │  │  │  │          │      values-da.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-de
│  │  │  │  │          │      values-de.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-el
│  │  │  │  │          │      values-el.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-en-rAU
│  │  │  │  │          │      values-en-rAU.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-en-rGB
│  │  │  │  │          │      values-en-rGB.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-en-rIN
│  │  │  │  │          │      values-en-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-es
│  │  │  │  │          │      values-es.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-es-rUS
│  │  │  │  │          │      values-es-rUS.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-et-rEE
│  │  │  │  │          │      values-et-rEE.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-eu-rES
│  │  │  │  │          │      values-eu-rES.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-fa
│  │  │  │  │          │      values-fa.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-fi
│  │  │  │  │          │      values-fi.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-fr
│  │  │  │  │          │      values-fr.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-fr-rCA
│  │  │  │  │          │      values-fr-rCA.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-gl-rES
│  │  │  │  │          │      values-gl-rES.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-gu-rIN
│  │  │  │  │          │      values-gu-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-h320dp-v13
│  │  │  │  │          │      values-h320dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-h720dp-v13
│  │  │  │  │          │      values-h720dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-hdpi-v4
│  │  │  │  │          │      values-hdpi-v4.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-hi
│  │  │  │  │          │      values-hi.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-hr
│  │  │  │  │          │      values-hr.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-hu
│  │  │  │  │          │      values-hu.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-hy-rAM
│  │  │  │  │          │      values-hy-rAM.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-in
│  │  │  │  │          │      values-in.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-is-rIS
│  │  │  │  │          │      values-is-rIS.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-it
│  │  │  │  │          │      values-it.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-iw
│  │  │  │  │          │      values-iw.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ja
│  │  │  │  │          │      values-ja.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ka-rGE
│  │  │  │  │          │      values-ka-rGE.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-kk-rKZ
│  │  │  │  │          │      values-kk-rKZ.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-km-rKH
│  │  │  │  │          │      values-km-rKH.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-kn-rIN
│  │  │  │  │          │      values-kn-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ko
│  │  │  │  │          │      values-ko.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ky-rKG
│  │  │  │  │          │      values-ky-rKG.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-land
│  │  │  │  │          │      values-land.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-large-v4
│  │  │  │  │          │      values-large-v4.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ldltr-v21
│  │  │  │  │          │      values-ldltr-v21.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-lo-rLA
│  │  │  │  │          │      values-lo-rLA.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-lt
│  │  │  │  │          │      values-lt.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-lv
│  │  │  │  │          │      values-lv.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-mk-rMK
│  │  │  │  │          │      values-mk-rMK.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ml-rIN
│  │  │  │  │          │      values-ml-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-mn-rMN
│  │  │  │  │          │      values-mn-rMN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-mr-rIN
│  │  │  │  │          │      values-mr-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ms-rMY
│  │  │  │  │          │      values-ms-rMY.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-my-rMM
│  │  │  │  │          │      values-my-rMM.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-nb
│  │  │  │  │          │      values-nb.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ne-rNP
│  │  │  │  │          │      values-ne-rNP.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-night-v8
│  │  │  │  │          │      values-night-v8.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-nl
│  │  │  │  │          │      values-nl.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-pa-rIN
│  │  │  │  │          │      values-pa-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-pl
│  │  │  │  │          │      values-pl.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-port
│  │  │  │  │          │      values-port.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-pt
│  │  │  │  │          │      values-pt.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-pt-rBR
│  │  │  │  │          │      values-pt-rBR.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-pt-rPT
│  │  │  │  │          │      values-pt-rPT.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ro
│  │  │  │  │          │      values-ro.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ru
│  │  │  │  │          │      values-ru.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-si-rLK
│  │  │  │  │          │      values-si-rLK.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-sk
│  │  │  │  │          │      values-sk.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-sl
│  │  │  │  │          │      values-sl.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-sq-rAL
│  │  │  │  │          │      values-sq-rAL.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-sr
│  │  │  │  │          │      values-sr.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-sv
│  │  │  │  │          │      values-sv.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-sw
│  │  │  │  │          │      values-sw.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-sw600dp-v13
│  │  │  │  │          │      values-sw600dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ta-rIN
│  │  │  │  │          │      values-ta-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-te-rIN
│  │  │  │  │          │      values-te-rIN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-th
│  │  │  │  │          │      values-th.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-tl
│  │  │  │  │          │      values-tl.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-tr
│  │  │  │  │          │      values-tr.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-uk
│  │  │  │  │          │      values-uk.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-ur-rPK
│  │  │  │  │          │      values-ur-rPK.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-uz-rUZ
│  │  │  │  │          │      values-uz-rUZ.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v11
│  │  │  │  │          │      values-v11.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v12
│  │  │  │  │          │      values-v12.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v13
│  │  │  │  │          │      values-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v14
│  │  │  │  │          │      values-v14.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v17
│  │  │  │  │          │      values-v17.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v18
│  │  │  │  │          │      values-v18.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v21
│  │  │  │  │          │      values-v21.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v22
│  │  │  │  │          │      values-v22.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-v23
│  │  │  │  │          │      values-v23.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-vi
│  │  │  │  │          │      values-vi.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-w360dp-v13
│  │  │  │  │          │      values-w360dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-w480dp-v13
│  │  │  │  │          │      values-w480dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-w500dp-v13
│  │  │  │  │          │      values-w500dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-w600dp-v13
│  │  │  │  │          │      values-w600dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-w720dp-v13
│  │  │  │  │          │      values-w720dp-v13.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-xlarge-land-v4
│  │  │  │  │          │      values-xlarge-land-v4.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-xlarge-v4
│  │  │  │  │          │      values-xlarge-v4.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-zh-rCN
│  │  │  │  │          │      values-zh-rCN.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-zh-rHK
│  │  │  │  │          │      values-zh-rHK.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-zh-rTW
│  │  │  │  │          │      values-zh-rTW.xml
│  │  │  │  │          │      
│  │  │  │  │          ├─values-zu
│  │  │  │  │          │      values-zu.xml
│  │  │  │  │          │      
│  │  │  │  │          └─xml
│  │  │  │  │                  preferences.xml
│  │  │  │  │                  
│  │  │  │  ├─rs
│  │  │  │  │  └─debug
│  │  │  │  │      ├─lib
│  │  │  │  │      └─obj
│  │  │  │  ├─shaders
│  │  │  │  │  └─debug
│  │  │  │  ├─symbols
│  │  │  │  │  └─debug
│  │  │  │  │          R.txt
│  │  │  │  │          
│  │  │  │  └─transforms
│  │  │  │      ├─dex
│  │  │  │      │  └─debug
│  │  │  │      │      └─folders
│  │  │  │      │          └─1000
│  │  │  │      │              └─1f
│  │  │  │      │                  └─main
│  │  │  │      │                          classes.dex
│  │  │  │      │                          
│  │  │  │      ├─mergeJavaRes
│  │  │  │      │  └─debug
│  │  │  │      └─mergeJniLibs
│  │  │  │          └─debug
│  │  │  │              └─folders
│  │  │  │                  └─2000
│  │  │  │                      └─1f
│  │  │  │                          └─main
│  │  │  │                              └─lib
│  │  │  │                                  ├─arm64-v8a
│  │  │  │                                  │      libimagepipeline.so
│  │  │  │                                  │      
│  │  │  │                                  ├─armeabi
│  │  │  │                                  │      libicu_common.so
│  │  │  │                                  │      libimagepipeline.so
│  │  │  │                                  │      
│  │  │  │                                  ├─armeabi-v7a
│  │  │  │                                  │      libfb.so
│  │  │  │                                  │      libfolly_json.so
│  │  │  │                                  │      libglog.so
│  │  │  │                                  │      libglog_init.so
│  │  │  │                                  │      libgnustl_shared.so
│  │  │  │                                  │      libicu_common.so
│  │  │  │                                  │      libimagepipeline.so
│  │  │  │                                  │      libjsc.so
│  │  │  │                                  │      libprivatedata.so
│  │  │  │                                  │      libreactnativejni.so
│  │  │  │                                  │      libyoga.so
│  │  │  │                                  │      
│  │  │  │                                  ├─x86
│  │  │  │                                  │      libfb.so
│  │  │  │                                  │      libfolly_json.so
│  │  │  │                                  │      libglog.so
│  │  │  │                                  │      libglog_init.so
│  │  │  │                                  │      libgnustl_shared.so
│  │  │  │                                  │      libicu_common.so
│  │  │  │                                  │      libimagepipeline.so
│  │  │  │                                  │      libjsc.so
│  │  │  │                                  │      libprivatedata.so
│  │  │  │                                  │      libreactnativejni.so
│  │  │  │                                  │      libyoga.so
│  │  │  │                                  │      
│  │  │  │                                  └─x86_64
│  │  │  │                                          libimagepipeline.so
│  │  │  │                                          
│  │  │  ├─outputs
│  │  │  │  ├─apk
│  │  │  │  │      app-debug.apk
│  │  │  │  │      
│  │  │  │  └─logs
│  │  │  │          manifest-merger-debug-report.txt
│  │  │  │          
│  │  │  └─tmp
│  │  │      └─compileDebugJavaWithJavac
│  │  │          └─emptySourcePathRef
│  │  └─src
│  │      └─main
│  │          │  AndroidManifest.xml
│  │          │  
│  │          ├─java
│  │          │  └─com
│  │          │      └─app
│  │          │              MainActivity.java
│  │          │              MainApplication.java
│  │          │              
│  │          └─res
│  │              ├─drawable
│  │              │      launch_screen.jpg
│  │              │      
│  │              ├─layout
│  │              │      launch_screen.xml
│  │              │      
│  │              ├─mipmap-hdpi
│  │              │      ic_launcher.png
│  │              │      
│  │              ├─mipmap-mdpi
│  │              │      ic_launcher.png
│  │              │      
│  │              ├─mipmap-xhdpi
│  │              │      ic_launcher.png
│  │              │      
│  │              ├─mipmap-xxhdpi
│  │              │      ic_launcher.png
│  │              │      
│  │              └─values
│  │                      color.xml
│  │                      strings.xml
│  │                      styles.xml
│  │                      
│  ├─build
│  │  └─intermediates
│  │      └─dex-cache
│  │              cache.xml
│  │              
│  ├─gradle
│  │  └─wrapper
│  │          gradle-wrapper.jar
│  │          gradle-wrapper.properties
│  │          
│  └─keystores
│          BUCK
│          debug.keystore.properties
│          
├─app
│  │  main.js
│  │  
│  ├─components
│  ├─pages
│  │      LoginPage.js
│  │      
│  └─redux
│      ├─actions
│      │      actions.js
│      │      
│      ├─contants
│      └─reducers
└─ios
    ├─app
    │  │  AppDelegate.h
    │  │  AppDelegate.m
    │  │  Info.plist
    │  │  main.m
    │  │  
    │  ├─Base.lproj
    │  │      LaunchScreen.xib
    │  │      
    │  └─Images.xcassets
    │      │  Contents.json
    │      │  
    │      └─AppIcon.appiconset
    │              Contents.json
    │              
    ├─app-tvOS
    │      Info.plist
    │      
    ├─app-tvOSTests
    │      Info.plist
    │      
    ├─app.xcodeproj
    │  │  project.pbxproj
    │  │  
    │  └─xcshareddata
    │      └─xcschemes
    │              app-tvOS.xcscheme
    │              app.xcscheme
    │              
    └─appTests
            appTests.m
            Info.plist
            
