import React from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch';
import { Label } from '../../components/ui/label';
import { Bell, Lock, User, Palette, Globe, Shield } from 'lucide-react';
import { toast } from 'sonner';

export function AdminSettingsPage() {
  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <Card className="p-6 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notif">Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive email updates</p>
              </div>
              <Switch id="email-notif" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notif">Push Notifications</Label>
                <p className="text-sm text-gray-500">Receive push notifications</p>
              </div>
              <Switch id="push-notif" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="weekly-report">Weekly Reports</Label>
                <p className="text-sm text-gray-500">Get weekly activity summary</p>
              </div>
              <Switch id="weekly-report" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="2fa">Two-Factor Authentication</Label>
                <p className="text-sm text-gray-500">Add extra security layer</p>
              </div>
              <Switch id="2fa" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="session-timeout">Session Timeout</Label>
                <p className="text-sm text-gray-500">Auto logout after inactivity</p>
              </div>
              <Switch id="session-timeout" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="login-alerts">Login Alerts</Label>
                <p className="text-sm text-gray-500">Notify on new device login</p>
              </div>
              <Switch id="login-alerts" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Privacy */}
        <Card className="p-6 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Lock className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Privacy</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="profile-visible">Profile Visibility</Label>
                <p className="text-sm text-gray-500">Show profile to all members</p>
              </div>
              <Switch id="profile-visible" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="activity-status">Activity Status</Label>
                <p className="text-sm text-gray-500">Show online status</p>
              </div>
              <Switch id="activity-status" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="data-sharing">Data Sharing</Label>
                <p className="text-sm text-gray-500">Share analytics data</p>
              </div>
              <Switch id="data-sharing" />
            </div>
          </div>
        </Card>

        {/* Preferences */}
        <Card className="p-6 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Palette className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-gray-500">Enable dark theme</p>
              </div>
              <Switch id="dark-mode" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="compact-view">Compact View</Label>
                <p className="text-sm text-gray-500">Use compact layout</p>
              </div>
              <Switch id="compact-view" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations">Animations</Label>
                <p className="text-sm text-gray-500">Enable UI animations</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
          </div>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
        >
          Save All Settings
        </Button>
      </div>
    </div>
  );
}
