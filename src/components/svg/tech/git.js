import { useThemeUI } from 'theme-ui';

export default function SVGGit({ className }) {
  const { theme: { rawColors } } = useThemeUI();

  return (
    <svg
      className={className}
      alt="Git"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 256 108"
    >
      <path fill={rawColors.svgGitLogo} d="M152.984 37.214c-5.597 0-9.765 2.748-9.765 9.362 0 4.983 2.747 8.443 9.463 8.443 5.693 0 9.56-3.355 9.56-8.65 0-6-3.46-9.155-9.258-9.155zm-11.19 46.701c-1.325 1.625-2.645 3.353-2.645 5.39 0 4.067 5.186 5.291 12.31 5.291 5.9 0 13.938-.414 13.938-5.9 0-3.261-3.867-3.462-8.753-3.768l-14.85-1.013zm30.113-46.394c1.828 2.34 3.764 5.597 3.764 10.276 0 11.292-8.851 17.904-21.667 17.904-3.259 0-6.209-.406-8.038-.914l-3.359 5.39 9.969.61c17.602 1.122 27.975 1.632 27.975 15.157 0 11.702-10.272 18.311-27.975 18.311-18.413 0-25.433-4.68-25.433-12.716 0-4.578 2.035-7.015 5.596-10.378-3.358-1.419-4.476-3.961-4.476-6.71 0-2.24 1.118-4.273 2.952-6.208 1.83-1.93 3.864-3.865 6.306-6.103-4.984-2.442-8.75-7.732-8.75-15.262 0-11.697 7.733-19.731 23.295-19.731 4.376 0 7.022.402 9.362 1.017h19.84v8.644l-9.361.713zM199.166 19.034c-5.8 0-9.157-3.36-9.157-9.161 0-5.793 3.356-8.95 9.157-8.95 5.9 0 9.258 3.157 9.258 8.95 0 5.801-3.357 9.161-9.258 9.161zM186.04 80.171v-8.033l5.19-.71c1.425-.205 1.627-.509 1.627-2.038V39.48c0-1.116-.304-1.832-1.325-2.134l-5.492-1.935 1.118-8.238h21.061V69.39c0 1.63.098 1.833 1.629 2.039l5.188.71v8.032H186.04zM255.267 76.227c-4.376 2.135-10.785 4.068-16.586 4.068-12.106 0-16.682-4.878-16.682-16.38V37.264c0-.61 0-1.017-.817-1.017h-7.12V27.19c8.955-1.02 12.513-5.496 13.632-16.585h9.666v14.45c0 .71 0 1.017.815 1.017h14.343v10.173H237.36v24.313c0 6.002 1.426 8.34 6.917 8.34 2.852 0 5.799-.71 8.24-1.626l2.75 8.954" />
      <path fill={rawColors.svgGitText} d="M104.529 49.53L58.013 3.017a6.86 6.86 0 0 0-9.703 0l-9.659 9.66 12.253 12.252a8.145 8.145 0 0 1 8.383 1.953 8.157 8.157 0 0 1 1.936 8.434L73.03 47.125c2.857-.984 6.154-.347 8.435 1.938a8.161 8.161 0 0 1 0 11.545 8.164 8.164 0 0 1-13.324-8.88L57.129 40.716l-.001 28.98a8.248 8.248 0 0 1 2.159 1.544 8.164 8.164 0 0 1 0 11.547c-3.19 3.19-8.36 3.19-11.545 0a8.164 8.164 0 0 1 2.672-13.328v-29.25a8.064 8.064 0 0 1-2.672-1.782c-2.416-2.413-2.997-5.958-1.759-8.925l-12.078-12.08L2.011 49.314a6.863 6.863 0 0 0 0 9.706l46.516 46.514a6.862 6.862 0 0 0 9.703 0l46.299-46.297a6.866 6.866 0 0 0 0-9.707" />
    </svg>
  );
}
