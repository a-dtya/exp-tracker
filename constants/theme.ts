import { scale, verticalScale } from "../utils/styling";

export const colors = {
    primary: '#4F46E5',
    secondary: '#6366F1',
    background: '#FFFFFF',
    surface: '#F3F4F6',
    text: '#111827',
    muted: '#6B7280',
    danger: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
}

export const spacingX = {
    xs: scale(4),
    sm: scale(8),
    md: scale(16),
    lg: scale(24),
    xl: scale(32),
}

export const spacingY = {
    xs: verticalScale(4),
    sm: verticalScale(8),
    md: verticalScale(16),
    lg: verticalScale(24),
    xl: verticalScale(32),
}
    
export const radius = {
    xs: verticalScale(4),
    sm: verticalScale(8),
    md: verticalScale(16),
    lg: verticalScale(24),
    xl: verticalScale(32),
}
    